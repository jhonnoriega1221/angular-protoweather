import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind-info',
  templateUrl: './wind-info.component.html',
  styleUrls: ['./wind-info.component.scss']
})
export class WindInfoComponent implements OnInit {

  @Input() windDirectionAngle:number = 0;
  @Input() windSpeed:number = 0;

  public windDirection:string = '';

  constructor() { }

  ngOnInit(): void {
    this.setWindDirection(this.windDirectionAngle);
  }

  setWindDirection(windDirectionAngle:number){
    if(windDirectionAngle >= 340 && windDirectionAngle <= 20){
      this.windDirection = "Este";
    } else if (windDirectionAngle > 20 && windDirectionAngle <= 70){
      this.windDirection = "Noreste";
    } else if (windDirectionAngle > 70 && windDirectionAngle <= 110){
      this.windDirection = "Norte";
    } else if (windDirectionAngle > 110 && windDirectionAngle <= 150){
      this.windDirection = "Noroeste";
    } else if (windDirectionAngle > 150 && windDirectionAngle <= 190){
      this.windDirection = "Oeste";
    } else if (windDirectionAngle > 190 && windDirectionAngle <= 250){
      this.windDirection = "Suroeste";
    } else if (windDirectionAngle > 250 && windDirectionAngle <= 310){
      this.windDirection = "Sur";
    } else {
      this.windDirection = "Sureste";
    }
  }

}
