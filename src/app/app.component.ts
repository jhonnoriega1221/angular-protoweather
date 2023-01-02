import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private titleService:Title, private renderer:Renderer2){
    titleService.setTitle('Protoweather');
    this.setFirstTime(localStorage.getItem('ft'));
    this.configDefaultTheme(localStorage.getItem('pw_theme'));
  }

  private setFirstTime(firstTime: string | null){
    if(firstTime === null || firstTime === undefined ){
      localStorage.setItem('ft', 'true');
    }
  }

  private configDefaultTheme(pwTheme: string | null) {

    const setDefaultTheme = (isDark:boolean) => {
      if (isDark) {
        this.renderer.addClass(document.body, 'dark-theme');
      } else {
        this.renderer.removeClass(document.body, 'dark-theme')
      }
    }

    if (pwTheme === null || pwTheme === undefined) {
      localStorage.setItem('pw_theme', 'auto');
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else if (localStorage.getItem('pw_theme') === 'auto') {
      setDefaultTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
    } else {
      setDefaultTheme(pwTheme === 'dark');
    }
  }
}
