import { Component, Input, ViewContainerRef, AfterViewInit, ViewChild, ComponentRef, ElementRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pw-dialog-container',
  template:
  `<dialog #dialogElementRef>
    <ng-container #vc></ng-container>
  </dialog>`,
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements AfterViewInit {
  
  @ViewChild("vc", {read: ViewContainerRef}) vc!:ViewContainerRef;
  @ViewChild('dialogElementRef') dialogElementRef!: ElementRef<HTMLDialogElement>;
  @Input() dialogContentRef!:ComponentRef<any>;
  @Output() closeDialogViaEsc = new EventEmitter();

  ngAfterViewInit(): void {

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
