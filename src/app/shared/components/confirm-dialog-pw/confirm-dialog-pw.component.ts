import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog-pw',
  templateUrl: './confirm-dialog-pw.component.html',
  styleUrls: ['./confirm-dialog-pw.component.scss']
})
export class ConfirmDialogPwComponent {
  @Input() data:any;

  public closeDialog(){
    
  }

}
