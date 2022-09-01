import { Component, OnInit } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor( private placeService:PlaceService) { }

  ngOnInit(): void {
    this.getFavoritePlaces();
  }

  public favoritePlaces:FavoritePlace[] = [];

  private getFavoritePlaces():void{
    this.favoritePlaces = this.placeService.getFavoritePlaces();
  }

}
