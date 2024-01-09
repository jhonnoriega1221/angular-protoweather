import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { PwButtonModule } from '../ui/button/button.module';
import { PwSpinnerModule } from '../ui/spinner/spinner.module';
import { PwToggleModule } from '../ui/toggle/toggle.module';
import { PwSkeletonModule } from '../ui/skeleton/skeleton.module';
import { PwSkyModule } from '../sky/sky.module';
import { PwDialogModule } from '../ui/dialog/dialog.module';
import { PwAutocompleteModule } from '../ui/autocomplete/autocomplete.module';
import { WeatherRoutingModule } from './weather-routing.module';

import { MatRippleModule } from '@angular/material/core';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { WeatherNavbarComponent } from './components/navbar-components/weather-navbar/weather-navbar.component';
import { WeatherNavButtonComponent } from './components/navbar-components/weather-nav-button/weather-nav-button.component';

import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { LocationSearchAutocompleteComponent } from './components/location-search-autocomplete/location-search-autocomplete.component';
import { NolocationWarningComponent } from './components/nolocation-warning/nolocation-warning.component';
import { NolocationButtonsComponent } from './components/nolocation-buttons/nolocation-buttons.component';
import { SetlocationAutocompleteDialogComponent } from './components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';

import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { ActualWeatherComponent } from './components/forecast-page-components/actual-weather/actual-weather.component';
import { ActualWeatherBackgroundComponent } from './components/forecast-page-components/actual-weather-background/actual-weather-background.component';
import { ActualWeatherInfoComponent } from './components/forecast-page-components/actual-weather-info/actual-weather-info.component';
import { NextHourWeatherComponent } from './components/forecast-page-components/next-hour-weather/next-hour-weather.component';
import { WeatherSunsetInfoComponent } from './components/forecast-page-components/weather-sunset-info/weather-sunset-info.component';
import { WeatherWeekInfoComponent } from './components/forecast-page-components/weather-week-info/weather-week-info.component';
import { WindInfoComponent } from './components/forecast-page-components/wind-info/wind-info.component';
import { WrapperHeaderComponent } from './components/forecast-page-components/wrapper-header/wrapper-header.component';

import { SearchPageComponent } from './pages/search-page/search-page.component';

import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoritePlaceCardComponent } from './components/favorites-page-components/favorite-place-card/favorite-place-card.component';
import { AddFavoritePlaceCardComponent } from './components/favorites-page-components/add-favorite-place-card/add-favorite-place-card.component';

@NgModule({
  declarations: [
    WeatherLayoutComponent,
    WeatherNavButtonComponent,
    WeatherNavbarComponent,
    SetlocationPageComponent,
    LocationSearchAutocompleteComponent,
    NolocationWarningComponent,
    NolocationButtonsComponent,
    SetlocationAutocompleteDialogComponent,
    ActualWeatherBackgroundComponent,
    ActualWeatherComponent,
    NextHourWeatherComponent,
    ActualWeatherInfoComponent,
    WrapperHeaderComponent,
    WeatherSunsetInfoComponent,
    WindInfoComponent,
    WeatherWeekInfoComponent,
    SearchPageComponent,
    FavoritesPageComponent,
    ForecastPageComponent,
    FavoritePlaceCardComponent,
    AddFavoritePlaceCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    MatRippleModule,
    MatAutocompleteModule,
    MatDialogModule,
    PwAutocompleteModule,
    PwToggleModule,
    PwSkeletonModule,
    SharedModule,
    MatSnackBarModule,
    PwButtonModule,
    PwSpinnerModule,
    ReactiveFormsModule,
    PwSkyModule
  ]
})
export class WeatherModule { }
