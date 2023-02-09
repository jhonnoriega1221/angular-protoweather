import { isPlatformBrowser } from '@angular/common';
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

  constructor( @Inject(PLATFORM_ID) private platformId:any) { }

  public getActualTheme():string|null{

    if(!isPlatformBrowser(this.platformId)) return null;
    
    return localStorage.getItem('pw_theme');
  }

  public setActualTheme(themeName:string){
    localStorage.setItem('pw_theme', themeName);
  }
}
