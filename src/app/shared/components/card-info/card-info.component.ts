import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent {

  @Input() icon:string = '';
  @Input() title:string = '';
  @Input() text:string|number = '';

}
