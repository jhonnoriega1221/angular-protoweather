import { Injectable, createComponent, ApplicationRef, EnvironmentInjector, ComponentRef } from '@angular/core';
import { Subject } from 'rxjs';
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';
import { PwDialogConfig } from '../models/pw-dialog-config';

@Injectable({
  providedIn: 'root'
})
export class PwDialog {

  private dialogContainerRef!: ComponentRef<DialogContainerComponent>;
  private dialogContentRef!: ComponentRef<any>;
  private dialogSubscriber!: Subject<any>;

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }

  openDialog(anyComponent:any, config?:PwDialogConfig){

    //Se instancia el componente que manejará la funcionalidad del dialogo
    this.dialogContainerRef = createComponent(DialogContainerComponent , {
      environmentInjector: this.injector
    });

    //Se instancia el contenido del dialogo (componente dentro del dialogo)
    this.dialogContentRef = createComponent(anyComponent , {
      environmentInjector: this.injector
    });

    //Se pasa la información y ajustes a los componentes instanciados
    this.dialogContainerRef.instance.dialogContentRef = this.dialogContentRef;
    this.dialogContainerRef.instance.config = config;
    this.dialogContentRef.instance.data = config?.data;

    //Se suscriben a los eventos que indican el cierre del dialogo
    this.dialogContainerRef.instance.closeDialogViaEsc.subscribe( () => { this.closeDialog(undefined) } );
    this.dialogContentRef.instance.closeDialogViaComponent.subscribe( (result:any) => { this.closeDialog(result) } );

    //Se incorporan el dialogContainer y el contenido del dialogo al DOM
    document.body.appendChild(this.dialogContainerRef.location.nativeElement);
    this.appRef.attachView(this.dialogContainerRef.hostView);

    this.dialogSubscriber = new Subject<any>;
    return this.dialogSubscriber.asObservable();

  }

  closeDialog(result:any):void{
      this.dialogSubscriber.next(result);
      this.dialogSubscriber.complete();
      this.dialogContainerRef.destroy();
  }
}
