import { Component, OnInit, Inject, PLATFORM_ID, EnvironmentInjector, createComponent } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router';
import { SetlocationAutocompleteDialogComponent } from '../../components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PwDialog } from 'src/app/ui/dialog/services/dialog.service';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor(private newDialog:PwDialog, private placeService:PlaceService, private router:Router, private snackBar: MatSnackBar) { }

  public defaultPlaceName:string|undefined = '';
  public favoritePlaces:FavoritePlace[] = [];
  public isEditModeFavorites:boolean = false;
  public isEditModeDefault:boolean = false;
  

  ngOnInit(): void {
    this.defaultPlaceName = this.getDefaultPlaceName();
    this.getFavoritePlaces();
  }

  private setIsMobile(innerWidth: number): boolean {
    const isMobile = innerWidth <= 600 ? true : false
    return isMobile;
  }

  public deleteFavoritePlace(placeId:string){
    const deleteFavoriteDialogRef = this.newDialog.openDialog(ConfirmDialogComponent, {
      data:{
        titleDialogText: 'Eliminar ciudad favorita',
        bodyDialogText: '¿Desea eliminar la ciudad de tu lista de ciudades favoritas?',
        okButtonText: 'Eliminar', 
        cancelButtonText: 'Cancelar'
      }
    });

    deleteFavoriteDialogRef.subscribe( (result:string) => {
      if(result){
          this.placeService.deleteFavoritePlace(placeId);
          this.getFavoritePlaces();
          this.snackBar.open('Ciudad eliminada de favoritos', '' ,{
            duration: 2000,
            horizontalPosition: 'left',
            panelClass: 'app-snackbar'
          });

          if(this.placeService.getFavoritePlaces().length === 0){
            this.isEditModeFavorites = false;
          }
        }
    });
  }

  private getFavoritePlaces():void{
    this.favoritePlaces = this.placeService.getFavoritePlaces();
  }

  private getDefaultPlaceName():string | undefined{
    const defaultPlace:Place|undefined = this.placeService.getDefaultPlace();

    return defaultPlace?.display_name;
  }

  public toggleEditModeFavorites(){
    this.isEditModeFavorites = !this.isEditModeFavorites;
  }

  public deleteDefaultPlace(){
    const deleteDefaultPlaceDialogRef = this.newDialog.openDialog(ConfirmDialogComponent, {
      data:{
        titleDialogText: 'Eliminar ciudad predeterminada', 
        bodyDialogText: 'Se va a eliminar la ciudad por defecto, ¿Desea continuar?', 
        okButtonText: 'Eliminar', 
        cancelButtonText: 'Cancelar'
      }
    });

    deleteDefaultPlaceDialogRef.subscribe( (result:string) => {
      if(result){
          this.placeService.deleteDefaultPlace();
          this.defaultPlaceName = this.getDefaultPlaceName();
          this.isEditModeDefault = false;
          this.snackBar.open('Se eliminó la ciudad predeterminada', '' ,{
            duration: 2000,
            horizontalPosition: 'left',
            panelClass: 'app-snackbar'
          });
        }
    });
    
  }
  public setDefaultLocation():void{
    this.router.navigate(['/setlocation'], {queryParams: {nextUrl:'/favorites'}});
  }

  public toggleEditModeDefault():void{
    this.isEditModeDefault = !this.isEditModeDefault;

  }

  public addFavoritePlace():void{
    this.openSetLocationDialog();
  }

  private openSetLocationDialog(){
    const newPlaceDialogRef = this.newDialog.openDialog(SetlocationAutocompleteDialogComponent, {
      width: '95%',
      height: '100%',
      maxWidth: '600px',
      maxHeight: '95vh',
      minHeight: '200px'
    });

    newPlaceDialogRef.subscribe( (result:Place) => {
      if(result){
        const placeName = this.placeService.setLocationName(
          result.address?.country,
          result.address?.city,
          result.address?.county,
          result.address?.town,
          result.address?.village,
          undefined
        );
        this.placeService.saveFavoritePlace({name: placeName, placeId: ''+result.place_id});
        this.snackBar.open('Ciudad agregada a favoritos', '' ,{
          duration: 2000,
          horizontalPosition: 'left',
          panelClass: 'app-snackbar'
        });
        this.getFavoritePlaces();
      }
    });

    /*

    const dialogRef = this.dialog.open(SetlocationAutocompleteDialogComponent,  {
      width: this.isMobile ? '100vw' : '600px',
      height: this.isMobile ? '100vh' : '100%',
      maxWidth: this.isMobile ? '100vw' : '600px',
      maxHeight: this.isMobile ? '100vh' : '95vh',
      minHeight: '200px',
      disableClose: true,
      enterAnimationDuration: '0ms'
    })

    dialogRef.afterClosed().subscribe( (result:Place) => {
      if(result){
        const placeName = this.placeService.setLocationName(
          result.address?.country,
          result.address?.city,
          result.address?.county,
          result.address?.town,
          result.address?.village,
          undefined
        );
        this.placeService.saveFavoritePlace({name: placeName, placeId: ''+result.place_id});
        this.snackBar.open('Ciudad agregada a favoritos', '' ,{
          duration: 2000,
          horizontalPosition: 'left',
          panelClass: 'app-snackbar'
        });
        this.getFavoritePlaces();
      }
    });*/
  }

}
