import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyGradientComponent } from './components/sky-gradient/sky-gradient.component';
import { CloudsComponent } from './components/clouds/clouds.component';



@NgModule({
  declarations: [
    SkyGradientComponent,
    CloudsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkyGradientComponent,
    CloudsComponent
  ]
})
export class PwSkyModule { }
