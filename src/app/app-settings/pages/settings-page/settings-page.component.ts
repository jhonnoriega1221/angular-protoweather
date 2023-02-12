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
  public themeSelected:string|undefined = this._appThemeService.getActualTheme();

  constructor( private _appThemeService:AppThemeService) { }

  ngOnInit(): void {
    this.optionsItems[0].selectOptionsList = themesData;
  }

  public changeTheme (selectedTheme:string) {
    this._appThemeService.setActualTheme(selectedTheme);
  }

}
