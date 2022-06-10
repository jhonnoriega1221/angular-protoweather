import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Place } from '../models/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private apiURL:string = "https://nominatim.openstreetmap.org/"

  constructor(private http:HttpClient) { }

  public search(query:string):Observable <Place[]>{
    return this.http.get<Place[]>(`${this.apiURL}search.php?format=jsonv2&q=${query}`);
  }

  public getPlace(lat:number, lon:number):Observable <Place>{
    return this.http.get<Place>(`${this.apiURL}reverse?format=jsonv2&zoom=10&lat=${lat}&lon=${lon}`)
  }
  
  public setDefaultPlace(lat:string, lon:string, name:string){
    const place = {
      name: name,
      lat: lat,
      lon: lon
    }
    localStorage.setItem("defloc", JSON.stringify(place));
  }
}
