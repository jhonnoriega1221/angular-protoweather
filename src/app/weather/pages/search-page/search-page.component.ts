import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place';
import { Router } from '@angular/router';
import { PlaceService } from '../../services/place.service';
import { FavoritePlace } from '../../favorite-place';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  public historySearch:FavoritePlace[] = [];

  public emptyHistory = {
    title: 'Realiza busquedas a lugares',
    message: 'Los lugares que busques se almacenarán aquí',
    imageURL: "../../../../assets/search-history-empty.svg"
  }

  constructor( private routerService:Router, private placeService:PlaceService) { }

  ngOnInit(): void {
    this.getSearchHistory();
  }

  public searchLocation(place:Place){
    this.placeService.saveHistoryPlace({name: place.display_name, placeId:''+place.place_id})
    this.routerService.navigate(['/forecast/',place.place_id ])
  }

  public getSearchHistory():void{
    this.historySearch = this.placeService.getHistoryPlaces();
  }

  public deleteHistoryItem(place:FavoritePlace):void{
    this.placeService.deleteHistoryPlace(place);
    this.getSearchHistory();
  }

}
