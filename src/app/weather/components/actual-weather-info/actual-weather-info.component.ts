import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.scss']
})
export class ActualWeatherInfoComponent implements OnInit {

  @Input() weatherPressure:number = 0;
  @Input() weatherDewpoint:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
