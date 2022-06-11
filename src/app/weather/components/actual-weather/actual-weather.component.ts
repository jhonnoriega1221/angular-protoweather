import { Component, OnInit, Input } from '@angular/core';

interface backgroundWeatherCode{
  weatherCode:number;
  backgroundURL:string;
  textColor:'black' | 'white';
}

@Component({
  selector: 'app-actual-weather',
  templateUrl: './actual-weather.component.html',
  styleUrls: ['./actual-weather.component.scss']
})
export class ActualWeatherComponent implements OnInit {

  @Input() weatherCode:number = 0;
  private backgrounds:backgroundWeatherCode[] = [
    { weatherCode: 0, backgroundURL: '../../../../../../assets/background-placeholder.jpg', textColor:'white' }
  ]

  public actualBackground:backgroundWeatherCode = {
    weatherCode: 0, backgroundURL: '', textColor: 'black'
  };

  constructor() { }

  ngOnInit(): void {
    this.setWeatherBackground(this.weatherCode);
  }

  private setWeatherBackground(weatherCode:number){
    this.actualBackground = this.backgrounds[weatherCode];
  }

}
