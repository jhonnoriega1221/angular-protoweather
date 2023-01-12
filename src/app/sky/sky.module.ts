import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyGradientComponent } from './components/sky-gradient/sky-gradient.component';



@NgModule({
  declarations: [
    SkyGradientComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkyGradientComponent
  ]
})
export class PwSkyModule { }
