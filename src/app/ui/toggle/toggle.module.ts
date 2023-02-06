import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwToggleDirective } from './directives/pw-toggle.directive';



@NgModule({
  declarations: [
    PwToggleDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PwToggleDirective
  ]
})
export class PwToggleModule { }
