import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private renderer:Renderer2){
    this.setFirstTime(localStorage.getItem('ft'));
    this.configDefaultTheme(localStorage.getItem('pw_theme'));
  }

  private setFirstTime(firstTime: string | null){
    if(firstTime === null || firstTime === undefined ){
      localStorage.setItem('ft', 'true');
    }
  }

  private configDefaultTheme(pwTheme: string | null) {

    const setDefaultTheme = (theme:string) => {
        this.renderer.addClass(document.body, `${theme}-theme`);
    }

    if (pwTheme === null || pwTheme === undefined || pwTheme === 'auto') {
      localStorage.setItem('pw_theme', 'auto');
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDefaultTheme('dark');
      }
      return;
    }
    
    if (pwTheme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDefaultTheme('dark');
      return;
    }

    if (pwTheme !== 'light') {
      setDefaultTheme(`${pwTheme}`);
      return;
    }
  
  }
}
