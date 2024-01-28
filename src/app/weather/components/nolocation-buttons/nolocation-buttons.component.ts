import { Component, Output, EventEmitter, HostListener, OnDestroy, PLATFORM_ID, Inject } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { SetlocationAutocompleteDialogComponent } from '../setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';
import { Place } from '../../models/place';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { PwDialog } from 'src/app/ui/dialog/services/dialog.service';

@Component({
  selector: 'app-nolocation-buttons',
  templateUrl: './nolocation-buttons.component.html',
  styleUrls: ['./nolocation-buttons.component.scss']
})
export class NolocationButtonsComponent implements OnDestroy {

  @Output() errorLocation: EventEmitter<any> = new EventEmitter();
  @Output() locationFound: EventEmitter<any> = new EventEmitter();

  public isSearchingLocation:boolean = false;

  private placeSubscribe?:Subscription;

  private errorMessage = {
    title: 'No se pudo encontrar su ubicación',
    message: 'Vuelve a intentarlo o selecciona una ubicación manualmente',
    imageURL: '../../../assets/location-error.svg'
  }

  constructor( private placeService:PlaceService, private newDialog:PwDialog, private snackBar: MatSnackBar ) { }

  ngOnDestroy(): void {
      this.placeSubscribe?.unsubscribe();
  }

  public getLocation():void{
    if(navigator.geolocation) {
      this.isSearchingLocation = true;
      navigator.geolocation.getCurrentPosition( (position) => {
        const longitude = position.coords.longitude;
        const latitude = position.coords.latitude;
        this.placeSubscribe = this.placeService.getPlace(latitude, longitude).subscribe(
          {
            next: (v:Place) => {
              //TODO: meter esto dentro de una funcion
              const displayName = this.placeService.setLocationName(
                v.address?.country,
                v.address?.city,
                v.address?.county,
                v.address?.town,
                v.address?.village,
                undefined
              );
              this.placeService.setDefaultPlace(v.lat, v.lon, displayName);

              this.snackBar.open('Se estableció la ciudad predeterminada', '' ,{
                duration: 2000,
                horizontalPosition: 'left',
                panelClass: 'app-snackbar'
              });
            },
            error: (e) => {
              this.isSearchingLocation = false;
              this.errorLocation.emit(this.errorMessage);
            },
            complete: () => this.locationFound.emit()
          }
        );
        
      }, (error) => {
        console.error(error);
        this.isSearchingLocation = false;
        this.errorLocation.emit(this.errorMessage);
      });
    } else {
      console.error("No support for geolocation");
    }
  }

  public openSetLocationDialog(){
    const newPlaceDialogRef = this.newDialog.openDialog(SetlocationAutocompleteDialogComponent, {
      width: '95%',
      height: '100%',
      maxWidth: '600px',
      maxHeight: '95vh',
      minHeight: '200px'
    });

    newPlaceDialogRef.subscribe( (result:Place) => {
      if(result){
        //TODO: meter esto dentro de una función
        const displayName = this.placeService.setLocationName(
          result.address?.country,
          result.address?.city,
          result.address?.county,
          result.address?.town,
          result.address?.village,
          undefined
        );
        this.placeService.setDefaultPlace(result.lat, result.lon, displayName);
        this.snackBar.open('Se estableció la ciudad predeterminada', '' ,{
          duration: 2000,
          horizontalPosition: 'left',
          panelClass: 'app-snackbar'
        });
        this.locationFound.emit();
        }
    });
  }
}