import { Component, Output, EventEmitter } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { MatDialog } from '@angular/material/dialog';
import { SetlocationAutocompleteDialogComponent } from '../setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';

@Component({
  selector: 'app-nolocation-buttons',
  templateUrl: './nolocation-buttons.component.html',
  styleUrls: ['./nolocation-buttons.component.scss']
})
export class NolocationButtonsComponent {

  public isSearchingLocation:boolean = false;
  @Output() errorLocation: EventEmitter<any> = new EventEmitter();
  @Output() locationFound: EventEmitter<any> = new EventEmitter();
  private isMobile = this.setIsMobile(window.innerWidth);

  private errorMessage = {
    title: 'No se pudo encontrar su ubicación',
    message: 'Vuelve a intentarlo o selecciona una ubicación manualmente',
    imageURL: '../../../assets/location-error.svg'
  }

  constructor( private placeService:PlaceService, public dialog:MatDialog ) { }


  private setIsMobile(innerWidth: number): boolean {
    const isMobile = innerWidth <= 600 ? true : false
    return isMobile;
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
    this.isMobile = this.setIsMobile(window.innerWidth);
    const dialogRef = this.dialog.open(SetlocationAutocompleteDialogComponent,  {
      width: this.isMobile ? '100vw' : '450px',
      height: this.isMobile ? '100vh' : '80vh',
      maxWidth: this.isMobile ? '100vw' : '450px',
      maxHeight: '100vh',
      minHeight: '200px',
      disableClose: true,
      enterAnimationDuration: '0ms'
    })

    dialogRef.afterClosed().subscribe( result => {
        if(result){
        this.placeService.setDefaultPlace(result.lat, result.lon, result.display_name)
        this.locationFound.emit();
        }
    })
  }


}