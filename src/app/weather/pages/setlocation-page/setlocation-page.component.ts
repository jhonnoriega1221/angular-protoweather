import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setlocation-page',
  templateUrl: './setlocation-page.component.html',
  styleUrls: ['./setlocation-page.component.scss']
})
export class SetlocationPageComponent implements OnInit {

  public warningInfo = {
    title:'¡Bienvenido a ProtoWeather!',
    message:'Selecciona una ubicación predeterminada',
    imageURL:"../../../../assets/location-1.svg"
  }

  public isSearchingLocation:boolean = false;

  constructor( private placeService:PlaceService, private routerService:Router) { }

  ngOnInit(): void {
  }

  public getLocation():void{
    if(navigator.geolocation) {
      this.isSearchingLocation = true;
      navigator.geolocation.getCurrentPosition( (position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.placeService.getPlace(latitude, longitude).subscribe(
          {
            next: (v) => { this.placeService.setDefaultPlace(v.lat, v.lon, v.display_name)},
            error: (e) => {
              this.isSearchingLocation = false;
              this.setWarningInfo(
                "Hubo un error al obtener tu ubicación",
                "Puedes intentar nuevamente o seleccionar una ubicación de forma manual",
                "../../../../assets/location-error.svg"
              )
            },
            complete: () => {this.isSearchingLocation = false; this.routerService.navigate(['/'])}
          }
        );
        
      }, (error) => {
        console.log(error);
        this.isSearchingLocation = false;
        this.setWarningInfo(
          "Hubo un error al obtener tu ubicación",
          "Puedes intentar nuevamente o seleccionar una ubicación de forma manual",
          "../../../../assets/location-error.svg"
        )
      });
    } else {
      console.log("No support for geolocation");
    }
  }

  private setWarningInfo(title:string, message:string, imageURL:string){
    this.warningInfo = {
      title: title,
      message: message,
      imageURL: imageURL
    }
  }

}
