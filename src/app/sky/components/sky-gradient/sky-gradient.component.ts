import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-sky-gradient',
  templateUrl: './sky-gradient.component.html',
  styleUrls: ['./sky-gradient.component.scss']
})
export class SkyGradientComponent {

  @Input() actualDate:string = '';

  setHour():string {
    return this.actualDate.split(', ', 2)[1].split(':', 2)[0];
  }

}
