import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyGradientComponent } from './components/sky-gradient/sky-gradient.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { StarsComponent } from './components/stars/stars.component';
import { SunComponent } from './components/sun/sun.component';



@NgModule({
  declarations: [
    SkyGradientComponent,
    CloudsComponent,
    StarsComponent,
    SunComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkyGradientComponent,
    CloudsComponent,
    StarsComponent,
    SunComponent
  ]
})
export class PwSkyModule { }
