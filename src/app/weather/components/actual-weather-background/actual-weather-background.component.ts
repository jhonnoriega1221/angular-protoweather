import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-actual-weather-background',
  templateUrl: './actual-weather-background.component.html',
  styleUrls: ['./actual-weather-background.component.scss']
})
export class ActualWeatherBackgroundComponent implements OnInit {

  @Input() backgroundURL:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
