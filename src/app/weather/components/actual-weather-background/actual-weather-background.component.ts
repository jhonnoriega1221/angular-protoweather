import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-actual-weather-background',
  templateUrl: './actual-weather-background.component.html',
  styleUrls: ['./actual-weather-background.component.scss']
})
export class ActualWeatherBackgroundComponent implements OnInit {

  @Input() backgroundURL:string = '';

  private scroll:any;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onWindowScroll);
  }

  onWindowScroll(e:any) {
    const scrollHeigth = 391;
    let actualScroll = window.scrollY;
    let actualOpacity = (100*actualScroll)/scrollHeigth;
      document.getElementById('background-opacity')?.style.setProperty('opacity',actualOpacity+'%');
    
  }
}
