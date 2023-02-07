import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppThemeService {

  constructor() { }

  public getActualTheme():string|null{
    return localStorage.getItem('pw_theme');
  }

  public setActualTheme(themeName:string){
    localStorage.setItem('pw_theme', themeName);
  }
}
