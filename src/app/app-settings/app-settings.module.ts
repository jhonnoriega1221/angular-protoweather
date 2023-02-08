import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSettingsRoutingModule } from './app-settings-routing.module';
import { SettingsListItemComponent } from './components/settings-list-item/settings-list-item.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';
import { FormsModule } from '@angular/forms';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SettingsListItemComponent,
    SettingsPageComponent,
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    AppSettingsRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class AppSettingsModule { }
