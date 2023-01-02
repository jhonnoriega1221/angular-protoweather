import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { WeatherNavbarComponent } from './components/weather-navbar/weather-navbar.component';
import { WeatherNavButtonComponent } from './components/weather-nav-button/weather-nav-button.component';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherHomePageComponent } from './pages/weather-home-page/weather-home-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { LocationSearchAutocompleteComponent } from './components/location-search-autocomplete/location-search-autocomplete.component';
import { NolocationWarningComponent } from './components/nolocation-warning/nolocation-warning.component';
import { NolocationButtonsComponent } from './components/nolocation-buttons/nolocation-buttons.component';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { SetlocationAutocompleteDialogComponent } from './components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';
import { ActualWeatherBackgroundComponent } from './components/actual-weather-background/actual-weather-background.component';
import { ActualWeatherComponent } from './components/actual-weather/actual-weather.component';
import { NextHourWeatherComponent } from './components/next-hour-weather/next-hour-weather.component';
import { ActualWeatherInfoComponent } from './components/actual-weather-info/actual-weather-info.component';
import { WrapperHeaderComponent } from './components/wrapper-header/wrapper-header.component';
import { WeatherSunsetInfoComponent } from './components/weather-sunset-info/weather-sunset-info.component';
import { WindInfoComponent } from './components/wind-info/wind-info.component';
import { WeatherWeekInfoComponent } from './components/weather-week-info/weather-week-info.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { SharedModule } from '../shared/shared.module';
import { FavoritePlaceCardComponent } from './components/favorite-place-card/favorite-place-card.component';
import { NoLocationHomeWarningComponent } from './components/no-location-home-warning/no-location-home-warning.component';
import { AddFavoritePlaceCardComponent } from './components/add-favorite-place-card/add-favorite-place-card.component';
import { ButtonModule } from '../button/button.module';
import { SettingsListItemComponent } from './components/settings-list-item/settings-list-item.component';

@NgModule({
  declarations: [
    WeatherHomePageComponent,
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
    SettingsPageComponent,
    ForecastPageComponent,
    AboutPageComponent,
    FavoritePlaceCardComponent,
    NoLocationHomeWarningComponent,
    AddFavoritePlaceCardComponent,
    SettingsListItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    WeatherRoutingModule,
    MatIconModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatDialogModule,
    SharedModule,
    MatSnackBarModule,
    ButtonModule
  ]
})
export class WeatherModule { }
