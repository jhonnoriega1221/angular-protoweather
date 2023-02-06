import { Component, OnInit, Renderer2 } from '@angular/core';

interface OptionItem {
  route?:string[] | null;
  icon:string;
  title:string;
  description:string;
  type:'url'|'toggle'|'select';
  selectedValue?:string|boolean|null;
  optionsList?:OptionSelectList[]|null;
}

interface OptionSelectList{
  value:string;
  name:string;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  public pwTheme = localStorage.getItem('pw_theme');
  public optionsItems:OptionItem[] = [
    {
      type: 'select',
      icon: 'moon',
      title: 'Tema',
      description: 'Selecciona tu tema preferido',
      optionsList: [
        {value: 'auto', name: 'Automático'},
        {value: 'light', name: 'Claro'},
        {value: 'dark', name: 'Oscuro'}
      ],
      selectedValue: this.pwTheme
    },
    {
      type: 'toggle',
      icon: 'play-circle',
      title: 'Animaciones',
      description: 'Controla las animaciones',
      selectedValue: true
    },
    {
      type: 'url',
      route: ['about'],
      icon: 'info-circle',
      title: 'Acerca de',
      description: 'Más información'
    }

  ]

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  public changeTheme (selectedTheme:any) {
    this.pwTheme = selectedTheme;
    this.optionsItems[0].selectedValue = selectedTheme;

    const setDefaultTheme = (isDark:boolean) => {
      if (isDark) {
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme')
      }
    }

    if (selectedTheme === 'auto') {
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      console.log(selectedTheme);
      setDefaultTheme(selectedTheme === 'dark');
    }

      localStorage.setItem('pw_theme', selectedTheme);

  }

  public toggleAnimations (selectValue:any){
    console.log(selectValue);
  }


}
