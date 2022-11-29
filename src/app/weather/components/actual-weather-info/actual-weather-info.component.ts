import { Component, OnInit, Input } from '@angular/core';
import { WeatherCardData } from '../../models/weather-card-data';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.scss']
})

export class ActualWeatherInfoComponent implements OnInit {

  @Input() weatherPressure:number = 0;
  @Input() weatherDewpoint:number = 0;

  public actualWeatherCards:WeatherCardData[] = [];

  constructor() {}

  ngOnInit(): void {
    this.actualWeatherCards = [
      { icon: 'square', title: 'Presión', text: this.weatherPressure + ' hPa'}, 
      { icon: 'square', title: 'Punto de rocío', text: this.weatherDewpoint + ' ºc'}
    ]
  }

}
