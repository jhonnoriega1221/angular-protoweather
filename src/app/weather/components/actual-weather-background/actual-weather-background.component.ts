import { Component, OnInit, Input } from '@angular/core';

interface backgroundWeatherCode{
  weatherCode:number;
  backgroundURL:string;
}

@Component({
  selector: 'app-actual-weather-background',
  templateUrl: './actual-weather-background.component.html',
  styleUrls: ['./actual-weather-background.component.scss']
})
export class ActualWeatherBackgroundComponent implements OnInit {

  @Input() weatherCode:number = 0;
  private backgrounds:backgroundWeatherCode[] = [
    { weatherCode: 0, backgroundURL: '../../../../../../assets/background-placeholder.jpg' }
  ]

  public backgroundURL:string = '';

  constructor() { }

  ngOnInit(): void {
    this.setWeatherBackground(this.weatherCode);
  }

  private setWeatherBackground(weatherCode:number){
    this.backgroundURL = this.backgrounds[weatherCode].backgroundURL;
  }

}
