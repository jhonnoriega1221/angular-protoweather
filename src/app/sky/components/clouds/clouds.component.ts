import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent {

  @Input() cloudsLevel:number = 5;
  @Input() actualHour:number = 0;
  @Input() isCloudy:boolean = false;

}
