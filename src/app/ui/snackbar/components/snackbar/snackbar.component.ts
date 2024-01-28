import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PwSnackbarConfig } from '../../models/pw-snackbar-config';

@Component({
  selector: 'app-snackbar',
  template: `
    <div class="snackbar" #snackbarElementRef>
      <p>{{message}}</p>
    </div>
  `,
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent {

  @ViewChild('snackbarElementRef') snackbarElementRef!: ElementRef<HTMLDivElement>;

  @Input() message!:string;
  @Input() action?:string;
  @Input() config?:PwSnackbarConfig;
  constructor(private host: ElementRef<HTMLElement>){}

  ngAfterViewInit():void {
    this.snackbarElementRef.nativeElement.style.display = 'block';
    setTimeout(() => {
      this.host.nativeElement.remove()
    }, 2000);
  }

}
