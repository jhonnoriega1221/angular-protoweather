import { Injectable, createComponent, ComponentRef, ApplicationRef, EnvironmentInjector } from '@angular/core';
import { SnackbarComponent } from '../components/snackbar/snackbar.component'
import { PwSnackbarConfig } from '../models/pw-snackbar-config'

@Injectable({
  providedIn: 'root'
})
export class PwSnackbar {

  private snackbarRef!: ComponentRef<SnackbarComponent>

  constructor(
    private appRef: ApplicationRef,
    private injector: EnvironmentInjector
  ) { }

  openSnackbar(message:string, action?:string, config?:PwSnackbarConfig) {
    
    this.snackbarRef = createComponent(SnackbarComponent, {
      environmentInjector: this.injector
    });
    
    this.snackbarRef.instance.message = message;
    this.snackbarRef.instance.action = action;
    this.snackbarRef.instance.config = config;

    document.body.appendChild(this.snackbarRef.location.nativeElement);
    this.appRef.attachView(this.snackbarRef.hostView);
  }
}
