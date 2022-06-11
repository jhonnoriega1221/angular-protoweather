import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { WeatherNavbarComponent } from './components/weather-navbar/weather-navbar.component';
import { WeatherNavButtonComponent } from './components/weather-nav-button/weather-nav-button.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomePageComponent } from './pages/weather-home-page/weather-home-page.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { LocationSearchAutocompleteComponent } from './components/location-search-autocomplete/location-search-autocomplete.component';
import { NolocationWarningComponent } from './components/nolocation-warning/nolocation-warning.component';
import { NolocationButtonsComponent } from './components/nolocation-buttons/nolocation-buttons.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { SetlocationAutocompleteDialogComponent } from './components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';


@NgModule({
  declarations: [
    WeatherHomePageComponent,
    HeaderInfoComponent,
    WeatherLayoutComponent,
    WeatherNavButtonComponent,
    WeatherNavbarComponent,
    SetlocationPageComponent,
    LocationSearchAutocompleteComponent,
    NolocationWarningComponent,
    NolocationButtonsComponent,
    SetlocationAutocompleteDialogComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    WeatherRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDialogModule
  ]
})
export class WeatherModule { }
