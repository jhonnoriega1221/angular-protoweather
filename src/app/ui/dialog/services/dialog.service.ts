import { ComponentType } from '@angular/cdk/portal';
import { Injectable, createComponent, ApplicationRef, EnvironmentInjector, ComponentRef } from '@angular/core';
import { DialogContainerComponent } from '../components/dialog-container/dialog-container.component';
import { PwDialogConfig } from '../models/pw-dialog-config';

@Injectable({
  providedIn: 'root'
})
export class PwDialog {

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }

  openDialog(anyComponent:ComponentType<any>, config?:PwDialogConfig){
    const dialogContainerRef = createComponent(DialogContainerComponent , {
      environmentInjector: this.injector
    });

    const dialogContentRef = createComponent(anyComponent , {
      environmentInjector: this.injector
    });

    dialogContainerRef.instance.componentContent = dialogContentRef;
    dialogContentRef.instance.data = config?.data;

    document.body.appendChild(dialogContainerRef.location.nativeElement);

    this.appRef.attachView(dialogContainerRef.hostView);

  }
}
