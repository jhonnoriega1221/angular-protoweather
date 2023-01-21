import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent {

  @Input() actualDate:string = '';

  setHour():string {
    return this.actualDate.split(', ', 2)[1].split(':', 2)[0];
  }
}
