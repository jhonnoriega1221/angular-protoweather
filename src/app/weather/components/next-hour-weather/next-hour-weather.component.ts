import { Component, OnInit } from '@angular/core';

interface Hourly{
  time:string;
  weather:number;
}

@Component({
  selector: 'app-next-hour-weather',
  templateUrl: './next-hour-weather.component.html',
  styleUrls: ['./next-hour-weather.component.scss']
})
export class NextHourWeatherComponent implements OnInit {

  public hourlyForecast:Hourly[] = [
    { time: '00:00', weather:  12},
    { time: '02:00', weather:  14},
    { time: '04:00', weather:  15},
    { time: '06:00', weather:  18},
    { time: '08:00', weather:  20},
    { time: '10:00', weather:  23},
    { time: '12:00', weather:  23},
    { time: '14:00', weather:  24},
    { time: '16:00', weather:  26}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
