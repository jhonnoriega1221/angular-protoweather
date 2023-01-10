import { Component, OnInit } from '@angular/core';
import { slideAnimation } from '../../weather.animation';
@Component({
  selector: 'app-weather-layout',
  templateUrl: './weather-layout.component.html',
  styleUrls: ['./weather-layout.component.scss'],
  animations: [slideAnimation]
})
export class WeatherLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
