import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { Place } from '../models/place';
import { PlaceDetails } from '../models/place-details';
import { FavoritePlace } from '../favorite-place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private apiURL:string = "https://nominatim.openstreetmap.org/"

  constructor(private http:HttpClient) { }

  public search(query:string|undefined):Observable <Place[]>{
    
    return this.http.get<Place[]>(`${this.apiURL}search.php?format=jsonv2&q=${query}&featuretype=city&addressdetails=1`);
  }

  public getPlace(lat:number, lon:number):Observable <Place> {
    return this.http.get<Place>(`${this.apiURL}reverse?format=jsonv2&zoom=16&lat=${lat}&lon=${lon}&addressdetails=1&featuretype=city`)
  }

  public getPlaceById(placeID:string):Observable<PlaceDetails>{
    return this.http.get<PlaceDetails>(`${this.apiURL}details.php?place_id=${placeID}&addressdetails=1&hierarchy=0&group_hierarchy=1&format=json`);
  }
  
  public setDefaultPlace(lat:string, lon:string, name:string):void{
    const place = {
      display_name: name,
      lat: lat,
      lon: lon
    }
    localStorage.setItem("defloc", JSON.stringify(place));
  }

  public getDefaultPlace():Place|undefined{
    if(localStorage.getItem('defloc')){
      return JSON.parse(localStorage.getItem('defloc') || '');
    }
    else{
      return undefined;
    }  
  }

  public deleteDefaultPlace():void{
    if(localStorage.getItem('defloc')){
      localStorage.setItem("defloc", '');
    }
  }

  public saveFavoritePlace(favoritePlace:FavoritePlace):void{
    let favPlaces = [];
    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    favPlaces.unshift(favoritePlace);

    localStorage.setItem("favplaces", JSON.stringify(favPlaces));

  }

  public getFavoritePlace(placeId:string):FavoritePlace|undefined{
    let favPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    return favPlaces.find(place => place.placeId === placeId);

  }

  public deleteFavoritePlace(placeId:string):void{
    let favPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('favplaces')){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    const placeIndex = favPlaces.findIndex(place => {
      return place.placeId === placeId;
    });

    favPlaces.splice(placeIndex, 1);

    localStorage.setItem("favplaces", JSON.stringify(favPlaces));

  }

  public getFavoritePlaces():FavoritePlace[]{
    let favPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    return favPlaces;
  }

  public saveHistoryPlace(historyPlace:FavoritePlace):void{
    let historyPlaces = [];
    if(localStorage.getItem('searchhistory') != undefined){
      historyPlaces = JSON.parse(localStorage.getItem('searchhistory') || '');
    }

    historyPlaces.unshift(historyPlace);

    localStorage.setItem("searchhistory", JSON.stringify(historyPlaces));

  }

  public deleteHistoryPlaces():void{
    let historyPlaces:FavoritePlace[] = [];

    localStorage.setItem("searchhistory", JSON.stringify(historyPlaces));

  }

  public deleteHistoryPlace(historyPlace:FavoritePlace):void{
    let historyPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('searchhistory') != undefined){
      historyPlaces = JSON.parse(localStorage.getItem('searchhistory') || '');
    }

    const placeIndex = historyPlaces.findIndex(place => {
      return place.placeId === historyPlace.placeId;
    });

    historyPlaces.splice(placeIndex, 1);

    localStorage.setItem("searchhistory", JSON.stringify(historyPlaces));

  }

  public getHistoryPlaces():FavoritePlace[]{
    let historyPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('searchhistory') != undefined){
      return JSON.parse(localStorage.getItem('searchhistory') || '');
    }
    else{
      return historyPlaces;
    }  
  }

  public setLocationName(countryName:string|undefined, cityName?:string|undefined, countyName?:string|undefined, townName?:string|undefined, villageName?:string|undefined, stateName?:string|undefined):string{
    
    let locationName:string = '';   

    if(cityName){
      locationName += `${cityName}, `;
    } else if(townName){
      locationName += `${townName}, `;
    } else if(villageName){
      locationName += `${villageName}, `;
    } else if(countyName){
      locationName += `${countyName}, `;
    }

    if(stateName){
      locationName += `${stateName}, `;
    }

    if(countryName){
      locationName += `${countryName}`;
    }

    return locationName;
  }
  
}