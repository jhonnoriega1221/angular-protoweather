import { Component, OnInit, HostListener } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { PlaceService } from '../../services/place.service';
import { Forecast } from '../../models/forecast-response';
import { Place } from '../../models/place';
import { ActivatedRoute, Router } from '@angular/router';

interface Message {
  title: string;
  message: string;
  imageURL: string;
}

interface ActualDay{
  weekDay:string;
  date:string;
}

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.scss']
})
export class ForecastPageComponent implements OnInit {

  private locationData: Place = {
    place_id: 0,
    display_name: '',
    lat: '',
    lon: ''
  };
  public forecastData: Forecast = {
    generationtime_ms: 0,
    daily: {
      sunrise: [],
      weathercode: [],
      time: [],
      precipitation_sum: [],
      temperature_2m_max: [],
      sunset: []
    },
    elevation: 0,
    utc_offset_seconds: 0,
    latitude: 0,
    hourly: {
      surface_pressure: [],
      temperature_2m: [],
      relativehumidity_2m: [],
      weathercode: [],
      time: [],
      windspeed_10m: [],
      winddirection_10m: [],
      shortwave_radiation: [],
      precipitation: [],
      dewpoint_2m: []
    },
    daily_units: {
      precipitation_sum: '',
      weathercode: '',
      time: '',
      sunset: '',
      temperature_2m_max: '',
      sunrise: ''
    },
    hourly_units: {
      windspeed_10m: '',
      winddirection_10m: '',
      relativehumidity_2m: '',
      precipitation: '',
      temperature_2m: '',
      time: '',
      weathercode: '',
      shortwave_radiation: '',
      surface_pressure: '',
      dewpoint_2m: ''
    },
    longitude: 0
  };

  public actualDay:ActualDay = {
    weekDay: this.getWeekDayName(),
    date: this.getDateFormat()
  }
  public actualHourIndex: number = 0;
  public placeName: string = '';
  public placeCode:string = '';

  public isLoading: boolean = true;
  public isDefaultLocationSet: boolean = false;
  public isDefaultLocation:boolean = true;
  public isError: boolean = false;
  public isMobile:boolean = this.getIsMobile(window.innerWidth);
  public isOneColumn:boolean = this.getIsOneColumn(window.innerWidth);

  public warningInfo = {
    title: 'Establece una ubicación por defecto para mostrarla aquí',
    message: '',
    imageURL: "../../../../assets/location-1.svg"
  }

  constructor(private weatherService: WeatherService, private placeService: PlaceService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.setLocationData();
  }

  private getIsMobile(innerWidth:number):boolean {
    return innerWidth < 600 ;
  }

  private getIsOneColumn(innerWidth:number):boolean {
    return innerWidth < 825 ;
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const innerWidth:number = event.target.innerWidth;
    this.isMobile = this.getIsMobile(innerWidth);
    this.isOneColumn = this.getIsOneColumn(innerWidth);
  }

  private setActualHourIndex(): void {
    this.weatherService.getForecast(this.locationData.lat, this.locationData.lon).subscribe(
      {
        next: (v) => {
          function toIsoString(date: Date) {
            const pad = function (num: number) {
              return (num < 10 ? '0' : '') + num;
            };

            return date.getFullYear() +
              '-' + pad(date.getMonth() + 1) +
              '-' + pad(date.getDate()) +
              'T' + pad(date.getHours()) +
              ':00';
          }

          this.forecastData = v;
          const time = new Date();
          time.setSeconds(time.getSeconds() + v.utc_offset_seconds);
          time.setMinutes(time.getMinutes() + time.getTimezoneOffset());
          this.actualHourIndex = v.hourly.time.findIndex((value: string) => value === toIsoString(time));
        },
        error: (e) => { console.log(e); this.isError = true; this.setWarningInfoError(); },
        complete: () => this.isLoading = false
      }
    );
  }

  public showLocationErrorMessage(message: Message) {
    this.warningInfo = {
      title: message.title,
      message: message.message,
      imageURL: message.imageURL
    }
  }

  private setWarningInfoError() {
    this.warningInfo = {
      title: "Oops",
      message: "Hubo un error al intentar obtener la ubicación",
      imageURL: "../../../../assets/location-error.svg"
    }
  }

  public reloadHome() {
    this.isError = false;
    this.isDefaultLocationSet = true;
    this.isLoading = true;
    this.ngOnInit();
  }

  private getWeekDayName():string {
    const date = new Date();
    switch (date.getDay()) {
      case 0:
        return 'Domingo';
      case 1:
        return 'Lunes';
      case 2:
        return 'Martes';
      case 3:
        return 'Miercoles';
      case 4:
        return 'Jueves';
      case 5:
        return 'Viernes';
      default:
        return 'Sabado';
      
    }
  }

  private getDateFormat():string{
    const date = new Date();
    

    function getTextMonth(month : number) {
      switch (month) {
        case 0:
          return 'Enero';
        case 1:
          return 'Febrero';
        case 2:
          return 'Marzo';
        case 3:
          return 'Abril';
        case 4:
          return 'Mayo';
        case 5:
          return 'Junio';
        case 6:
          return 'Julio';
        case 7:
          return 'Agosto';
        case 8:
          return 'Septiembre';
        case 9:
          return 'Octubre';
        case 10:
          return 'Noviembre';
        default:
          return 'Diciembre';
      }
    }

    return date.getDate() + " de " + getTextMonth(date.getMonth()) + " de " + date.getFullYear();
  }

  public setLocationData() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.placeCode = params['id'];
        this.isDefaultLocation = false;
        
        this.placeService.getPlaceById(params['id']).subscribe({
          next: (v) => {
            const [lat, lng] = [v.geometry.coordinates[1], v.geometry.coordinates[0]];
            this.placeService.getPlace(lat, lng).subscribe({
              next: (v:Place) => {
                this.locationData = v;
                const displayName = this.placeService.setLocationName(v.address?.city, v.address?.county, v.address?.town, v.address?.village, v.address?.state, v.address?.country);

                this.placeName = displayName;
              },
              error: (e) => { console.log(e); this.isError = true; this.setWarningInfoError(); },
              complete: () => {this.setActualHourIndex()}
            })
          },
          error: (e) => { console.log(e); this.isError = true; this.setWarningInfoError(); },
          complete: () => {}
        })

      } else {
        const defaultPlace = this.placeService.getDefaultPlace();
        if(defaultPlace){
          this.isDefaultLocationSet = true;
          this.placeService.getPlace(Number.parseFloat(defaultPlace.lat) , Number.parseFloat(defaultPlace.lon) ).subscribe({
            next: (v:Place) => {
              this.locationData = v;
              const displayName = this.placeService.setLocationName(v.address?.city, v.address?.county, v.address?.town, v.address?.village, v.address?.state, v.address?.country);
              this.placeName = displayName;
            },
            error: (e) => {
              console.log(e); this.isError = true; this.setWarningInfoError();
            },
            complete: () => ( this.setActualHourIndex())
          })
        } else {
          this.isLoading = false;
          this.isError = true;
          this.isDefaultLocationSet = false;
        }
      }
    });
  }

  public goToSelectedLocation(place:Place) {
    this.placeService.saveHistoryPlace({name: place.display_name, placeId:''+place.place_id});
    if(this.isDefaultLocation){
      this.router.navigate(['/forecast/',place.place_id ]);
      return;
    }
    this.router.navigate(['/forecast/',place.place_id ]);
    this.isLoading = true;
    
  }
}
