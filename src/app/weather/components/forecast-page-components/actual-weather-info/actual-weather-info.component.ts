import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Input, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { WeatherCardData } from '../../../models/weather-card-data';

@Component({
  selector: 'app-actual-weather-info',
  templateUrl: './actual-weather-info.component.html',
  styleUrls: ['./actual-weather-info.component.scss']
})

export class ActualWeatherInfoComponent implements OnInit {

  constructor( @Inject(PLATFORM_ID) private platformId:any) {}

  @Input() weatherPressure:number = 0;
  @Input() weatherDewpoint:number = 0;
  public isSmallScreen:boolean|null = isPlatformBrowser(this.platformId) ? this.setIsSmallScreen(innerWidth) : null;

  public actualWeatherCards:WeatherCardData[] = [];


  ngOnInit(): void {
    this.actualWeatherCards = [
      { icon: 'prescription-bottle', title: 'Presión', text: this.weatherPressure + ' hPa'}, 
      { icon: 'temperature-low', title: 'Punto de rocío', text: this.weatherDewpoint + ' ºc'}
    ]
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    const innerWidth:number = event.target.innerWidth;
    this.isSmallScreen = this.setIsSmallScreen(innerWidth);
  }

  setIsSmallScreen(innerWidth:number):boolean{
    return innerWidth < 360;
  }

}
