import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actual-weather-background',
  templateUrl: './actual-weather-background.component.html',
  styleUrls: ['./actual-weather-background.component.scss']
})
export class ActualWeatherBackgroundComponent{

  @Input() actualDate:string = '';

  setHour():number {
    return Number.parseInt(this.actualDate.split(', ', 2)[1].split(':', 2)[0]);
  }
}
