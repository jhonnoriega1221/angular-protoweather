import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { PlaceService } from '../../services/place.service';
import { Forecast } from '../../models/forecast-response';
import { Place } from '../../models/place';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.scss']
})
export class ForecastPageComponent implements OnInit {

  private locationData:Place = this.placeService.getDefaultPlace();
  public forecastData:Forecast = {
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
      dewpoint_2m:''
    },
    longitude: 0
  };
  public actualHourIndex: number = 0;
  public placeName:string = this.locationData.display_name;

  public isLoading:boolean = true;

  constructor(private weatherService:WeatherService, private placeService:PlaceService) { }

  ngOnInit(): void {
    this.getDate();
  }

  private getDate(): void {
    this.weatherService.getForecast(this.locationData.lat, this.locationData.lon).subscribe(
      {
        next: (v) => {
          function toIsoString(date:Date) {
            var pad = function (num:number) {
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
          this.actualHourIndex = v.hourly.time.findIndex((value:string) => value === toIsoString(time));
        },
        error: (e) => console.log(e),
        complete: () => this.isLoading = false
      }
    );
  }

}
