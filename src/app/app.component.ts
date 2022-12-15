import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor( private titleService:Title){
    titleService.setTitle('Protoweather');
    this.setFirstTime(localStorage.getItem('ft'));
  }

  private setFirstTime(firstTime: string | null){
    if(firstTime === null || firstTime === undefined ){
      localStorage.setItem('ft', 'true');
    }
  }
}
