import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent {

  @Input() cloudsLevel:number = 5;
  @Input() actualDate:string = '';
  @Input() isCloudy:boolean = false;

  setHour():string {
    return this.actualDate.split(', ', 2)[1].split(':', 2)[0];
  }
}
