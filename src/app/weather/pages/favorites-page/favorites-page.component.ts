import { Component, OnInit } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';

interface Message {
  title: string;
  message: string;
  imageURL: string;
}

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor( private placeService:PlaceService) { }

  public defaultPlaceName:string|undefined = '';

  public warningInfo = {
    title: 'No se encontró ninguna ubicación por defecto',
    message: 'Puedes elegir tu ubicación actual, o seleccionar una manualmente',
    imageURL: ""
  }

  public emptyFavorites = {
    title: 'No se encontraron lugares favoritos',
    message: 'Puedes buscar un lugar y seleccionarlo como favorito',
    imageURL: "../../../../assets/favorites-empty.png"
  }

  ngOnInit(): void {
    this.defaultPlaceName = this.getDefaultPlaceName();
    this.getFavoritePlaces();
  }

  public showLocationErrorMessage(message: Message) {
    this.warningInfo = {
      title: message.title,
      message: message.message,
      imageURL: message.imageURL
    }
  }

  public favoritePlaces:FavoritePlace[] = [];

  private getFavoritePlaces():void{
    this.favoritePlaces = this.placeService.getFavoritePlaces();
  }

  private getDefaultPlaceName():string | undefined{
    const defaultPlace:Place|undefined = this.placeService.getDefaultPlace();

    return defaultPlace?.display_name;
  }

  public reloadDefaultPlace():void {
    this.defaultPlaceName = this.getDefaultPlaceName();
  }

}
