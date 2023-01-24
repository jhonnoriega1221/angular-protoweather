import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkyGradientComponent } from './components/sky-gradient/sky-gradient.component';
import { CloudsComponent } from './components/clouds/clouds.component';
import { StarsComponent } from './components/stars/stars.component';
import { SunComponent } from './components/sun/sun.component';
import { RainComponent } from './components/rain/rain.component';



@NgModule({
  declarations: [
    SkyGradientComponent,
    CloudsComponent,
    StarsComponent,
    SunComponent,
    RainComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SkyGradientComponent,
    CloudsComponent,
    StarsComponent,
    SunComponent,
    RainComponent
  ]
})
export class PwSkyModule { }
