import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place';
import { Router } from '@angular/router';

interface Message {
  title: string;
  message: string;
  imageURL: string;
}

@Component({
  selector: 'app-setlocation-page',
  templateUrl: './setlocation-page.component.html',
  styleUrls: ['./setlocation-page.component.scss']
})
export class SetlocationPageComponent implements OnInit {

  public warningInfo = {
    title: '¡Bienvenido a ProtoWeather!',
    message: 'ProtoWeather necesita una ubicación para mostrar el pronostico en la pagina de inicio',
    imageURL: "../../../../assets/location-1.svg"
  }

  constructor(private placeService: PlaceService, private routerService: Router) { }

  ngOnInit(): void {
  }
  
  public showLocationErrorMessage(message: Message) {
    this.warningInfo = {
      title: message.title,
      message: message.message,
      imageURL: message.imageURL
    }
  }

  public goToHome() {
    localStorage.setItem('ft', 'false');
    setTimeout(() => {
      this.routerService.navigate(['/favorites']);
    }, 1000);
  }

}
