import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-sunset-info',
  templateUrl: './weather-sunset-info.component.html',
  styleUrls: ['./weather-sunset-info.component.scss']
})
export class WeatherSunsetInfoComponent implements OnInit {

  @Input() sunsetTime:string = '';
  @Input() sunriseTime:string = '';

  constructor() { }

  ngOnInit(): void {
    this.setSunriseTime(this.sunriseTime);
    this.setSunsetTime(this.sunsetTime);
  }

  setSunsetTime(sunsetTime:string){
    this.sunsetTime = sunsetTime.slice(11);
  }

  setSunriseTime(sunriseTime:string){
    this.sunriseTime = sunriseTime.slice(11);
  }

}
