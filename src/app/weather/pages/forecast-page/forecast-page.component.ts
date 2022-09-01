import { Component, OnInit } from '@angular/core';
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
  public actualHourIndex: number = 0;
  public placeName: string = '';
  public placeCode:string = '';

  public isLoading: boolean = true;
  public isDefaultLocationSet: boolean = false;
  public isDefaultLocation:boolean = true;
  public isError: boolean = false;

  public warningInfo = {
    title: 'No se encontró ninguna ubicación por defecto',
    message: 'ProtoWeather necesita una ubicación por defecto para mostrar el pronostico en la pagina de inicio',
    imageURL: "../../../../assets/location-error.svg"
  }

  constructor(private weatherService: WeatherService, private placeService: PlaceService, private activatedRoute: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.setLocationData();
    
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

          const time = new Date();
          this.forecastData = v;
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

  public setWarningInfoError() {
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

  public setLocationData() {
    this.activatedRoute.params.subscribe(params => {
      if (params['id'] != undefined) {
        this.placeCode = params['id'];
        this.isDefaultLocation = false;
        this.isDefaultLocationSet = true;
        
        this.placeService.getPlaceById(params['id']).subscribe({
          next: (v) => {
            const [lat, lng] = [v.geometry.coordinates[1], v.geometry.coordinates[0]];
            this.placeService.getPlace(lat, lng).subscribe({
              next: (v) => {
                this.locationData = v;
                this.placeName = v.display_name;
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
        if(defaultPlace != undefined){
          this.isDefaultLocationSet = true;
          this.placeService.getPlace(Number.parseFloat(defaultPlace.lat) , Number.parseFloat(defaultPlace.lon) ).subscribe({
            next: (v) => {
              this.locationData = v;
              this.placeName = v.display_name;
            },
            error: (e) => {
              console.log(e); this.isError = true; this.setWarningInfoError();
            },
            complete: () => ( this.setActualHourIndex())
          })
        } else {
          this.isLoading = false;
          this.isError = true;
        }
      }
    });
  }
}
