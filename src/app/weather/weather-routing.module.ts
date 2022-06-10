import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { WeatherHomePageComponent } from './pages/weather-home-page/weather-home-page.component';

const routes: Routes = [
  { path: '', component: WeatherLayoutComponent,
    children: [
      { path: '', component: WeatherHomePageComponent }

    ] },
    { path: 'setlocation', component: SetlocationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
