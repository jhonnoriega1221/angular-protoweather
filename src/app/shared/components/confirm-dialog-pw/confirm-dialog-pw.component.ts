import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PwDialog } from 'src/app/ui/dialog/services/dialog.service';
import { DialogEliminarComponent } from '../dialog-eliminar/dialog-eliminar.component';
@Component({
  selector: 'app-confirm-dialog-pw',
  templateUrl: './confirm-dialog-pw.component.html',
  styleUrls: ['./confirm-dialog-pw.component.scss']
})
export class ConfirmDialogPwComponent {
  constructor(private dialog:PwDialog){}

  @Input() data:any;
  @Output() destroyDialog = new EventEmitter();

  public closeDialog(){
    console.log('aa');
    this.destroyDialog.emit('ola');
  }

  public openDialog(){
    const dialog = this.dialog.openDialog(DialogEliminarComponent, {
      data:{
        titulo2:'mensaje'
      }
    });

    dialog.subscribe( (result:any) => {
      console.log(result);
    } )
  }

}
