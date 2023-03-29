import { ComponentType } from '@angular/cdk/portal';
import { Injectable, createComponent, ApplicationRef, EnvironmentInjector, ComponentRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';
import { PwDialogConfig } from '../models/pw-dialog-config';
import { PwDialogRef } from '../models/pw-dialog-ref';

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

  openDialog(anyComponent:ComponentType<any>, config?:PwDialogConfig){
    this.dialogContainerRef = createComponent(DialogContainerComponent , {
      environmentInjector: this.injector
    });

    this.dialogContentRef = createComponent(anyComponent , {
      environmentInjector: this.injector
    });

    this.dialogContainerRef.instance.componentContent = this.dialogContentRef;
    this.dialogContentRef.instance.data = config?.data;
    this.dialogContentRef.instance.destroyDialog.subscribe( (result:any) => { this.closeDialog(result) } );

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
