import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { WeatherNavbarComponent } from './components/weather-navbar/weather-navbar.component';
import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { WeatherNavButtonComponent } from './components/weather-nav-button/weather-nav-button.component';



@NgModule({
  declarations: [
    WeatherNavbarComponent,
    WeatherLayoutComponent,
    WeatherNavButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatRippleModule
  ], exports: [
    WeatherLayoutComponent
  ]
})
export class SharedModule { }
