import { Component, Input, OnInit } from '@angular/core';

interface WindInfo {
  icon:string;
  direction:string;
  speed:string;
}

@Component({
  selector: 'app-wind-info',
  templateUrl: './wind-info.component.html',
  styleUrls: ['./wind-info.component.scss']
})
export class WindInfoComponent implements OnInit {

  @Input() windDirectionAngle:number = 0;
  @Input() windSpeed:number = 0;

  public windDirection:string = '';
  public windInfo!:WindInfo;

  constructor() { }

  ngOnInit(): void {

    this.windInfo = {
      icon: 'square', direction: this.setWindDirection(this.windDirectionAngle), speed: this.windSpeed + " km/h"
    }
  }

  setWindDirection(windDirectionAngle:number):string{
    if(windDirectionAngle >= 340 && windDirectionAngle <= 20){
      return "Este";
    } else if (windDirectionAngle > 20 && windDirectionAngle <= 70){
      return "Noreste";
    } else if (windDirectionAngle > 70 && windDirectionAngle <= 110){
      return "Norte";
    } else if (windDirectionAngle > 110 && windDirectionAngle <= 150){
      return "Noroeste";
    } else if (windDirectionAngle > 150 && windDirectionAngle <= 190){
      return "Oeste";
    } else if (windDirectionAngle > 190 && windDirectionAngle <= 250){
      return "Suroeste";
    } else if (windDirectionAngle > 250 && windDirectionAngle <= 310){
      return "Sur";
    } else {
      return "Sureste";
    }
  }

}
