import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, lastValueFrom } from 'rxjs';
import { Place } from '../models/place';
import { PlaceDetails } from '../models/place-details';

interface FavoritePlace{
  placeId:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private apiURL:string = "https://nominatim.openstreetmap.org/"

  constructor(private http:HttpClient) { }

  public search(query:string):Observable <Place[]>{
    return this.http.get<Place[]>(`${this.apiURL}search.php?format=jsonv2&q=${query}`);
  }

  public getPlace(lat:number, lon:number):Observable <Place> {
    return this.http.get<Place>(`${this.apiURL}reverse?format=jsonv2&zoom=10&lat=${lat}&lon=${lon}`)
  }

  public getPlaceById(placeID:number):Observable<PlaceDetails>{
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
    if(localStorage.getItem('defloc') != undefined){
      return JSON.parse(localStorage.getItem('defloc') || '');
    }
    else{
      return undefined;
    }  
  }

  public saveFavoritePlace(favoritePlace:FavoritePlace):void{
    let favPlaces = [];
    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    favPlaces.push(favoritePlace);

    localStorage.setItem("favplaces", JSON.stringify(favPlaces));

  }

  public getFavoritePlace(placeId:string):FavoritePlace|undefined{
    let favPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    return favPlaces.find(place => place.placeId === placeId);

  }

  public deleteFavoritePlace(favoritePlace:FavoritePlace):void{
    let favPlaces:FavoritePlace[] = [];

    if(localStorage.getItem('favplaces') != undefined){
      favPlaces = JSON.parse(localStorage.getItem('favplaces') || '');
    }

    console.log(favPlaces)
    console.log(favoritePlace)

    const placeIndex = favPlaces.findIndex(place => {
      return place === favoritePlace
    });

    favPlaces.splice(placeIndex, 1);

    localStorage.setItem("favplaces", JSON.stringify(favPlaces));

  }
}
