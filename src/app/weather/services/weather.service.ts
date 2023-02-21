import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Forecast } from '../models/forecast-response';
import { WeatherCode } from '../models/weatherCode';
import weatherCodesData from '../data/weatherCodes.json';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http:HttpClient ) { }

  private apiURL:string = 'https://api.open-meteo.com/v1/forecast?';

  getForecast(lat:string, lon:string):Observable <Forecast>{
    const hourlyVariables:string[] = [
      'temperature_2m',
      'relativehumidity_2m',
      'precipitation',
      'weathercode',
      'shortwave_radiation',
      'surface_pressure',
      'dewpoint_2m',
      'windspeed_10m',
      'winddirection_10m',
    ];

    const dailyVariables:string[] = [
      'weathercode',
      'temperature_2m_max',
      'sunrise',
      'sunset',
      'precipitation_sum',
    ];

    const timezone:string = 'auto';
    const latitude:number = parseFloat(lat.slice(0,-2));
    const longitude:number = parseFloat(lon.slice(0,-2));

    const endpoint = this.apiURL+
    '&hourly='+hourlyVariables+
    '&daily='+dailyVariables+
    '&timezone='+timezone+
    '&latitude='+latitude+
    '&longitude='+longitude;

    return this.http.get<Forecast>(endpoint);
  }

  getWeatherCodeData(weatherCode:number):WeatherCode{
    const weatherCodes:WeatherCode[] = <WeatherCode[]>weatherCodesData;
    const weatherCodeIndex = weatherCodes.findIndex( (element:WeatherCode) => element.weatherCode === weatherCode );
    return weatherCodes[weatherCodeIndex];
  }
}