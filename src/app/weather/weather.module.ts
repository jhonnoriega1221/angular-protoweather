import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { WeatherNavbarComponent } from './components/weather-navbar/weather-navbar.component';
import { WeatherNavButtonComponent } from './components/weather-nav-button/weather-nav-button.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomePageComponent } from './pages/weather-home-page/weather-home-page.component';
import { LocationSelectorComponent } from './components/location-selector/location-selector.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    WeatherHomePageComponent,
    LocationSelectorComponent,
    HeaderInfoComponent,
    WeatherLayoutComponent,
    WeatherNavButtonComponent,
    WeatherNavbarComponent,
    SetlocationPageComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    WeatherRoutingModule,
    MatIconModule,
    MatRippleModule
  ]
})
export class WeatherModule { }
