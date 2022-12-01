import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-nav-button',
  templateUrl: './weather-nav-button.component.html',
  styleUrls: ['./weather-nav-button.component.scss']
})
export class WeatherNavButtonComponent implements OnInit {

  @Input() text:string = '';
  @Input() icon:string = '';
  @Input() url:string = '';
  @Input() isHidden:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
