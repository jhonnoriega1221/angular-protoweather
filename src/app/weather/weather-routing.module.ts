import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherLayoutComponent } from './layouts/weather-layout/weather-layout.component';
import { SetlocationPageComponent } from './pages/setlocation-page/setlocation-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { ForecastPageComponent } from './pages/forecast-page/forecast-page.component';
import { environment } from 'src/environments/environment';

const nameApp:string = environment.appName;

const routes: Routes = [
  { path: '', component: WeatherLayoutComponent,
    children: [
      { path: '', component: ForecastPageComponent, title: "Protoweather" },
      { path: 'search', component: SearchPageComponent, title: `Buscar - ${nameApp}`  },
      { path: 'favorites', component: FavoritesPageComponent, title: `Favoritos - ${nameApp}` },
      { path: 'forecast/:id', component: ForecastPageComponent},
      { path: 'settings', loadChildren: () => import('../app-settings/app-settings.module').then(m => m.AppSettingsModule), title: `Ajustes - ${nameApp}`  }
    ]
  },
  { path: 'setlocation', component: SetlocationPageComponent, title: `Establecer ubicación - ${nameApp}`}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
