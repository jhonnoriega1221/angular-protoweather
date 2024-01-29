import { Component, Input, ViewContainerRef, AfterViewInit, ViewChild, ComponentRef, ElementRef, Output, EventEmitter } from '@angular/core';
import {PwDialogConfig} from '../../models/pw-dialog-config'

@Component({
  selector: 'pw-dialog-container',
  template:`
    <dialog #dialogElementRef>
      <ng-container #vc></ng-container>
    </dialog>
  `,
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements AfterViewInit {
  
  @ViewChild("vc", {read: ViewContainerRef}) vc!:ViewContainerRef;
  @ViewChild('dialogElementRef') dialogElementRef!: ElementRef<HTMLDialogElement>;
  @Input() dialogContentRef!:ComponentRef<any>;
  @Output() closeDialogViaEsc = new EventEmitter();

  @Input() config?:PwDialogConfig;

  ngAfterViewInit(): void {

    //Configura los estilos del Popup
    //TODO: Opimize this with a for
    if(this.config?.width){
      this.dialogElementRef.nativeElement.style.width = this.config.width
    }

    if(this.config?.height){
      this.dialogElementRef.nativeElement.style.height = this.config.height
    }

    if(this.config?.maxHeight){
      this.dialogElementRef.nativeElement.style.maxHeight = this.config.maxHeight
    }

    if(this.config?.maxWidth){
      this.dialogElementRef.nativeElement.style.maxWidth = this.config.maxWidth
    }

    if(this.config?.minHeight){
      this.dialogElementRef.nativeElement.style.minHeight = this.config.minHeight
    }

    if(this.config?.minWidth){
      this.dialogElementRef.nativeElement.style.minWidth = this.config.minWidth
    }

    //Se coloca el contenido del componente en el dialogo y se muestra el dialogo en pantalla
    setTimeout(() => {
      this.vc.insert(this.dialogContentRef.hostView);
      this.dialogElementRef.nativeElement.showModal();
    },0);

    //Se elimina el dialogo del DOM cuando se cierre por medio de la tecla 'esc'
    this.dialogElementRef.nativeElement.addEventListener('close', (event) => {
      event.preventDefault();
      this.closeDialogViaEsc.emit();
    }); 
  }
}
