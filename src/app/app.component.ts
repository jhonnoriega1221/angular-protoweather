import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { AppThemeService } from './app-settings/services/app-theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private _appThemeService:AppThemeService, @Inject(PLATFORM_ID) private platformId:any){
    if(isPlatformBrowser(platformId)) this._appThemeService.setActualTheme(this._appThemeService.getActualTheme());
  }
}
