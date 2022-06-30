//https://icons8.com/icon/set/weather/color
// [ngStyle]="{'background-image': 'url('+ actualBackground.backgroundURL+')'}"
import { Component, OnInit, Input } from '@angular/core';
import { WeatherCode } from '../../models/weatherCode';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-actual-weather',
  templateUrl: './actual-weather.component.html',
  styleUrls: ['./actual-weather.component.scss']
})
export class ActualWeatherComponent implements OnInit {

  @Input() weatherCode:number = 0;
  @Input() place:string = '';
  @Input() temperature:number = 0;
  @Input() humidity:number = 0;
  @Input() precipitation:number = 0;
  @Input() radiation:number = 0;

  public weatherCodeData:WeatherCode = {
    backgroundURL: '',
    description: '',
    iconURL: '',
    textColor: 'black',
    weatherCode: 0
  };

  constructor( private weatherService:WeatherService ) { }

  ngOnInit(): void {
    this.weatherCodeData = this.weatherService.getWeatherCodeData(this.weatherCode);
  }
}
