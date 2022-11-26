import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import {MatLegacyDialog as MatDialog, MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';
import { SetlocationAutocompleteDialogComponent } from '../setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';
@Component({
  selector: 'app-nolocation-buttons',
  templateUrl: './nolocation-buttons.component.html',
  styleUrls: ['./nolocation-buttons.component.scss']
})
export class NolocationButtonsComponent implements OnInit {

  public isSearchingLocation:boolean = false;
  @Output() errorLocation: EventEmitter<any> = new EventEmitter();
  @Output() locationFound: EventEmitter<any> = new EventEmitter();

  private errorMessage = {
    title: 'No se pudo encontrar su ubicación',
    message: 'Vuelve a intentarlo o selecciona una ubicación manualmente',
    imageURL: '../../../assets/location-error.svg'
  }

  constructor( private placeService:PlaceService, public dialog:MatDialog ) { }

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
              this.errorLocation.emit(this.errorMessage);
            },
            complete: () => this.locationFound.emit()
          }
        );
        
      }, (error) => {
        console.log(error);
        this.isSearchingLocation = false;
        this.errorLocation.emit(this.errorMessage);
      });
    } else {
      console.log("No support for geolocation");
    }
  }

  public openSetLocationDialog(){
    this.dialog.open(SetlocationAutocompleteDialogComponent,  {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100%',
      width: '100%',
      disableClose: true,
      enterAnimationDuration: '0ms'
    })
  }
}

@Component({
  selector: 'app-set-location-search-dialog',
  templateUrl: 'set-location-search-dialog.html',
})
export class SetLocationSearchDialog {
  constructor(public dialogRef: MatDialogRef<SetLocationSearchDialog>) {}
}