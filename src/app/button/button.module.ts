import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PwFlatButtonDirective } from './directives/pw-flat-button.directive';
import { PwOutlineButtonDirective } from './directives/pw-outline-button.directive';
import { PwTextButtonDirective } from './directives/pw-text-button.directive';



@NgModule({
  declarations: [
    PwFlatButtonDirective,
    PwOutlineButtonDirective,
    PwTextButtonDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PwFlatButtonDirective,
    PwOutlineButtonDirective,
    PwTextButtonDirective
  ]
})
export class ButtonModule { }
