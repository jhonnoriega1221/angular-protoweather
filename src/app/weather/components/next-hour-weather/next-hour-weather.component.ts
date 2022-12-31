import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

interface Hourly{
  time:string;
  temperature:number;
  iconURL:string;
}

@Component({
  selector: 'app-next-hour-weather',
  templateUrl: './next-hour-weather.component.html',
  styleUrls: ['./next-hour-weather.component.scss']
})
export class NextHourWeatherComponent implements OnInit {
  
  @Input() actualHourIndex:number = 0;
  @Input() temperatures:number[] = [];
  @Input() weatherTimes:string[] = [];
  @Input() weatherCodes:number[] = [];

  public hourlyForecast:Hourly[] = [];
  public scrollPosition:number = 0;
  public scrollWidth:number = -1;

  constructor( private weatherService:WeatherService ) { }

  ngOnInit(): void {
    this.setHourForecast(this.actualHourIndex);
  }

  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener('scroll', ['$event']) // for window scroll events
  onScroll(el:HTMLElement) {
    this.scrollPosition = el.scrollLeft;

    if(this.scrollWidth === -1){
      this.scrollWidth = el.scrollWidth - 358;
    }
  }

  private setHourForecast(actualHourIndex:number){
    const lastHourIndex = actualHourIndex + 24
    for(let i = actualHourIndex + 1; i <= lastHourIndex; i++){

      const newHourlyForecast = {
        time: this.weatherTimes[i].slice(11),
        temperature: this.temperatures[i],
        iconURL: this.weatherService.getWeatherCodeData(this.weatherCodes[i]).iconURL
      }

      this.hourlyForecast.push(newHourlyForecast)
    }
  }


  public scrollForward(el:HTMLElement){
    el.scrollLeft += 314;
  }

  public scrollBack(el:HTMLElement){
    el.scrollLeft -= 314;
  }
}
