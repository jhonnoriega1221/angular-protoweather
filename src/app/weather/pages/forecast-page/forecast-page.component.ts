import { Component, OnInit, OnDestroy, HostListener, ViewChild } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { PlaceService } from '../../services/place.service';
import { Forecast } from '../../models/forecast-response';
import { Place } from '../../models/place';
import { ActivatedRoute, Router } from '@angular/router';
import { mergeMap, Subscription} from 'rxjs';
import { PlaceDetails } from '../../models/place-details';

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
export class ForecastPageComponent implements OnInit, OnDestroy {

  public forecastData$: Forecast = {
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

  public actualDay:string = '';
  public actualHourIndex: number = 0;
  public placeName: string = '';
  private placeCoordinates:{lat:number, lon:number} = {
    lat:0,
    lon:0
  }
  public placeCode:string|undefined;

  public urlParam?: Subscription;
  public forecastSubscribe?: Subscription;

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
    //Se obtiene el id del lugar por medio de la url
    this.urlParam = this.activatedRoute.params.subscribe(params => {
      this.forecastSubscribe?.unsubscribe();
      this.placeCode = params['id'];
      this.reloadHome();
    });
  }

  ngOnDestroy(): void {
    this.urlParam?.unsubscribe();
    this.forecastSubscribe?.unsubscribe();
  }

  private getForecastData(){


    //Determina si se está consultando el lugar por defecto
    this.isDefaultLocation = this.placeCode ? false:true;

    //Valida si el lugar por defecto está establecido
    if(this.isDefaultLocation)
      this.isDefaultLocationSet = this.placeService.getDefaultPlace() ? true:false;

    //declara el primer pipe que se consultará
    let firstApiCall:any;
    let placeMergeMap:any[] = [];

    if(this.isDefaultLocation){
      if(!this.isDefaultLocationSet){
        this.isLoading = false;
        this.isError = true;
        return;
      }
      const defaultPlace = this.placeService.getDefaultPlace();
      this.placeCoordinates = {
        lat: Number.parseFloat(defaultPlace!.lat),
        lon: Number.parseFloat(defaultPlace!.lon)
      };
      this.placeName = defaultPlace!.display_name;

      //La primera llamada a la API será la del clima
      firstApiCall = this.weatherService.getForecast(this.placeCoordinates.lat+'',this.placeCoordinates.lon+'');

    } else {
      //La primera llamada a la API será la de obtener lugar por ID
      firstApiCall = this.placeService.getPlaceById(this.placeCode!);

      //Se obtienen las coordenadas y el nombre del lugar por medio de la respuesta de la API
      placeMergeMap.push( 
        mergeMap( (placeDetailsResponse:PlaceDetails) => {
          if(!this.isDefaultLocation){
            this.placeCoordinates = {
              lat: placeDetailsResponse.geometry.coordinates[1],
              lon: placeDetailsResponse.geometry.coordinates[0]
            };
            const cityName = placeDetailsResponse.address![0].localname;
            const countryName = placeDetailsResponse.address!.find(
              (element) => element.type === 'country'
            );
            this.placeName = this.placeService.setLocationName(countryName?.localname, cityName);
          }

          //La siguiente llamada a la API será la del clima
          return this.weatherService.getForecast(this.placeCoordinates.lat+'', this.placeCoordinates.lon+'');
        })
      )
    }

    this.forecastSubscribe = firstApiCall.pipe(
      ...placeMergeMap
    ).subscribe(
      {
        next: (forecastResponse:Forecast) => {
          this.forecastData$ = forecastResponse;
          const time = new Date();
          time.setSeconds(time.getSeconds() + forecastResponse.utc_offset_seconds);
          time.setMinutes(time.getMinutes() + time.getTimezoneOffset());
          this.actualHourIndex = forecastResponse.hourly.time.findIndex((value: string) => value === this.toIsoString(time));
          this.actualDay = `${time.getDate()} de ${this.getTextMonth(time.getMonth())}, ${time.getHours() < 10 ? '0'+time.getHours() : time.getHours()}:${time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes()}`; //TODO: Better leading zero implementation
        },
        error: (e:any) => { console.log(e); this.isError = true; this.setWarningInfoError(); },
        complete: () => this.isLoading = false
      }
    )
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

  private toIsoString(date: Date) {
    const pad = function (num: number) {
      return (num < 10 ? '0' : '') + num;
    };

    return date.getFullYear() +
      '-' + pad(date.getMonth() + 1) +
      '-' + pad(date.getDate()) +
      'T' + pad(date.getHours()) +
      ':00';
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
    this.isLoading = true;
    this.getForecastData();
  }

    private getTextMonth(month : number) {
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

  public goToSelectedLocation(place:Place) {
    this.placeService.saveHistoryPlace({name: place.display_name, placeId:''+place.place_id});
    this.router.navigate(['/forecast/',place.place_id ]);
    this.reloadHome();
    
  }
}
