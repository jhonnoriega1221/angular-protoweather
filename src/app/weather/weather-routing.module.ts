import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { WeatherHomePageComponent } from './pages/weather-home-page/weather-home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { FirstTimeGuard } from './guards/first-time.guard';


const routes: Routes = [
  { path: '', component: WeatherLayoutComponent,
    children: [
      { path: '', component: ForecastPageComponent },
      { path: 'search', component: SearchPageComponent },
      { path: 'favorites', component: FavoritesPageComponent },
      { path: 'forecast/:id', component: ForecastPageComponent },
      { path: 'about', component: AboutPageComponent }

    ], canActivateChild: [FirstTimeGuard] },
    { path: 'setlocation', component: SetlocationPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
