import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-page',
  templateUrl: './forecast-page.component.html',
  styleUrls: ['./forecast-page.component.scss']
})
export class ForecastPageComponent implements OnInit {


  public weatherCode:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

}
