import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {

  @Input() actualHour:number = 0;

}
