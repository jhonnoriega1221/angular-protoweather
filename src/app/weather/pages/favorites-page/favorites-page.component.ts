import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SetlocationAutocompleteDialogComponent } from '../../components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor( private placeService:PlaceService, private router:Router, public dialog:MatDialog, private snackBar: MatSnackBar, @Inject(PLATFORM_ID) private platformId:any ) { }

  public defaultPlaceName:string|undefined = '';
  public favoritePlaces:FavoritePlace[] = [];
  private isMobile = isPlatformBrowser(this.platformId) ? this.setIsMobile(window.innerWidth) : null;
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar ciudad favorita', 
        dialogBodyText: '¿Desea eliminar la ciudad de tu lista de ciudades favoritas?',
        okButtonText: 'Eliminar', 
        cancelButtonText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe( (result:boolean) => {
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
    })
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
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Eliminar ciudad predeterminada', 
        dialogBodyText: 'Se va a eliminar la ciudad por defecto, ¿Desea continuar?', 
        okButtonText: 'Eliminar', 
        cancelButtonText: 'Cancelar'
      }
    });

    dialogRef.afterClosed().subscribe( (result:boolean) => {
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
    })
    
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
    if(isPlatformBrowser(this.platformId)){
      this.isMobile = this.setIsMobile(window.innerWidth);
    }
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
    });
  }

}
