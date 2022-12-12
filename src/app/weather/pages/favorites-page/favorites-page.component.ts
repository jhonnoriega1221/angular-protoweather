import { Component, OnInit } from '@angular/core';
import { FavoritePlace } from '../../favorite-place';
import { Place } from '../../models/place';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SetlocationAutocompleteDialogComponent } from '../../components/setlocation-autocomplete-dialog/setlocation-autocomplete-dialog.component';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.scss']
})
export class FavoritesPageComponent implements OnInit {

  constructor( private placeService:PlaceService, private router:Router, public dialog:MatDialog) { }

  public defaultPlaceName:string|undefined = '';
  public favoritePlaces:FavoritePlace[] = [];
  private isMobile = this.setIsMobile(window.innerWidth);
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
    this.placeService.deleteFavoritePlace(placeId);
    this.getFavoritePlaces();
    
    if(this.placeService.getFavoritePlaces().length === 0){
      this.isEditModeFavorites = false;
    }
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
    this.placeService.deleteDefaultPlace();
    this.defaultPlaceName = this.getDefaultPlaceName();
    this.isEditModeDefault = false;
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

    dialogRef.afterClosed().subscribe( (result:Place) => {
      if(result){
        const placeName = this.placeService.setLocationName(result.address?.city, result.address?.county, result.address?.town, result.address?.village, result.address?.state, result.address?.country);
        console.log(placeName)
        this.placeService.saveFavoritePlace({name: placeName, placeId: ''+result.place_id});
      }
      this.getFavoritePlaces();
    });
  }

}
