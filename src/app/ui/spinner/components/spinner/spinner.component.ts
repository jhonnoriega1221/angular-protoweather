import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() size:'small'|'normal'|'large' = 'normal';
  @Input() color!:'primary'|'error';
}
