import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {

  @Input() data:any;
  @Output() closeDialogViaComponent = new EventEmitter();

  public closeDialog(result?:boolean){
    if(result){
      this.closeDialogViaComponent.emit(result);
      return;
    }
    this.closeDialogViaComponent.emit(undefined);
  }

}
