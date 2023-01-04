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
    return this.http.get<Forecast>(`${this.apiURL}hourly=temperature_2m,relativehumidity_2m,precipitation,weathercode,shortwave_radiation,surface_pressure,dewpoint_2m,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,sunrise,sunset,precipitation_sum&timezone=auto&latitude=${lat.slice(0,-2)}&longitude=${lon.slice(0,-2)}`);
  }

  getWeatherCodeData(weatherCode:number):WeatherCode{
    const weatherCodes:WeatherCode[] = <WeatherCode[]>weatherCodesData;
    const weatherCodeIndex = weatherCodes.findIndex( (element:WeatherCode) => element.weatherCode === weatherCode );
    return weatherCodes[weatherCodeIndex];
  }
}
