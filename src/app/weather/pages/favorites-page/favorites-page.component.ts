import { Component, OnInit } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor( private placeService:PlaceService, private router:Router) { }

  public defaultPlaceName:string|undefined = '';
  public favoritePlaces:FavoritePlace[] = [];

  ngOnInit(): void {
    this.defaultPlaceName = this.getDefaultPlaceName();
    this.getFavoritePlaces();
  }

  private getFavoritePlaces():void{
    this.favoritePlaces = this.placeService.getFavoritePlaces();
  }

  private getDefaultPlaceName():string | undefined{
    const defaultPlace:Place|undefined = this.placeService.getDefaultPlace();

    return defaultPlace?.display_name;
  }
  
  public setDefaultLocation():void{
    this.router.navigate(['/setlocation'], {queryParams: {nextUrl:'/favorites'}});
  }

  public addFavoritePlace():void{
    console.log('addPlace');
  }

}
