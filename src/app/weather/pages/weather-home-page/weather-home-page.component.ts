import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-home-page',
  templateUrl: './weather-home-page.component.html',
  styleUrls: ['./weather-home-page.component.scss']
})
export class WeatherHomePageComponent implements OnInit {

  public weatherCode:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
