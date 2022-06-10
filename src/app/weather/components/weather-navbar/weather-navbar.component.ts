import { Component, OnInit } from '@angular/core';

interface NavbarItem {
  text:string;
  icon:string;
  url:string;
}

@Component({
  selector: 'app-weather-navbar',
  templateUrl: './weather-navbar.component.html',
  styleUrls: ['./weather-navbar.component.scss']
})
export class WeatherNavbarComponent implements OnInit {

  public navbarItems:NavbarItem[] = [
    { text: 'Inicio', icon: 'home', url: '/' },
    { text: 'Buscar', icon: 'search', url: '/search' },
    { text: 'Favoritos', icon: 'favorites', url: '/favorites' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
