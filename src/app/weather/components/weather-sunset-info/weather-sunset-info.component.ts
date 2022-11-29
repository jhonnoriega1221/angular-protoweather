import { Component, Input, OnInit } from '@angular/core';
import { WeatherCardData } from '../../models/weather-card-data';

interface sunsetInfo {
  icon:string;
  title:string;
  text:string | number;
  sideText:string;
}

@Component({
  selector: 'app-weather-sunset-info',
  templateUrl: './weather-sunset-info.component.html',
  styleUrls: ['./weather-sunset-info.component.scss']
})
export class WeatherSunsetInfoComponent implements OnInit {

  @Input() sunsetTime:string = '';
  @Input() sunriseTime:string = '';
  public sunsetWeatherCards:sunsetInfo[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setSunriseTime(this.sunriseTime);
    this.setSunsetTime(this.sunsetTime);

    this.sunsetWeatherCards = [
      { icon: 'square', title: 'Amanecer', text: this.sunriseTime, sideText: 'Hace 12 Horas'}, 
      { icon: 'square', title: 'Atardecer', text: this.sunsetTime, sideText: 'En 12 Horas'}
    ]
  }

  setSunsetTime(sunsetTime:string){
    this.sunsetTime = sunsetTime.slice(11);
  }

  setSunriseTime(sunriseTime:string){
    this.sunriseTime = sunriseTime.slice(11);
  }

}
