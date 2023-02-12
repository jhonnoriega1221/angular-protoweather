import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

  constructor( @Inject(PLATFORM_ID) private platformId:any, @Inject(DOCUMENT) private document:Document) { }

  public getActualTheme():string|undefined{

    if(!isPlatformBrowser(this.platformId)) return undefined;
    
    const actualTheme = this.document.cookie.split('; ').find((row) => row.startsWith('app_theme='))?.split('=')[1];
    return actualTheme;
  }

  public setActualTheme(themeName:string|undefined){

    if(themeName === undefined || themeName === 'auto'){
      this.document.documentElement.dataset['theme'] = '';
      this.document.cookie = `app_theme=${'auto'};max-age=31536000;path="/"`;
      return;
    }

    this.document.documentElement.dataset['theme'] = themeName;
    this.document.cookie = `app_theme=${themeName};max-age=31536000;path="/"`;
  }
}
