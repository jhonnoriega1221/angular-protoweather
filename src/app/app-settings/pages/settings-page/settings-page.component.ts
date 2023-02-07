import { Component, OnInit, Renderer2 } from '@angular/core';
import settingsData from '../../data/settings.json';
import themesData from '../../data/themes.json'; 
import { SettingItem, OptionSelectList } from '../../models/setting-item';
import { AppThemeService } from '../../services/app-theme.service';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  public optionsItems:SettingItem[] = settingsData;
  public themesList:OptionSelectList[] = themesData;
  public themeSelected:string|null = this._appThemeService.getActualTheme();

  constructor( private _appThemeService:AppThemeService, private _renderer:Renderer2) { }
  

  ngOnInit(): void {
    this.optionsItems[0].selectOptionsList = themesData;
  }

  public changeTheme (selectedTheme:any) {

    const setDefaultTheme = (themeName:string) => {
      if (themeName !== 'light' && themeName !== 'auto') {
        this._renderer.addClass(document.body, `${themeName}-theme`);
      }
    }

    const removeOldTheme = (themeName:string) => {
      this._renderer.removeClass(document.body, `${themeName}-theme`);
    }

    const oldTheme = this._appThemeService.getActualTheme();

    if(oldTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches){
      removeOldTheme('dark');
    }

    if (oldTheme !== 'light') {
      removeOldTheme(`${oldTheme}`);
    }

    this._appThemeService.setActualTheme(selectedTheme);
    this.themeSelected = selectedTheme;

    if (selectedTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDefaultTheme('dark');
      return;
    }

    setDefaultTheme(selectedTheme);
  }

}
