//https://icons8.com/icon/set/weather/color
// [ngStyle]="{'background-image': 'url('+ actualBackground.backgroundURL+')'}"
import { Component, OnInit, Input } from '@angular/core';
import { WeatherCode } from '../../../models/weatherCode';
import { WeatherService } from '../../../services/weather.service';
import { PlaceService } from '../../../services/place.service';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { PwDialog } from 'src/app/ui/dialog/services/dialog.service';
import { PwSnackbar } from 'src/app/ui/snackbar/services/snackbar.service';

@Component({
  selector: 'app-actual-weather',
  templateUrl: './actual-weather.component.html',
  styleUrls: ['./actual-weather.component.scss']
})
export class ActualWeatherComponent implements OnInit {

  isFavorite:boolean = false;
  favoriteIconStatus:'fa-solid fa-star'|'fa-regular fa-star' = 'fa-solid fa-star';

  @Input() weatherCode:number = 0;
  @Input() place:string = '';
  @Input() temperature:number = 0;
  @Input() humidity:number = 0;
  @Input() precipitation:number = 0;
  @Input() radiation:number = 0;
  @Input() actualDay:string = '';

  @Input() placeCode:string|undefined;
  @Input() isDefaultLocation:boolean = false;

  public weatherCodeData:WeatherCode = {
    backgroundURL: '',
    description: '',
    iconURL: '',
    backgroundColor: '#000000',
    textColor: '#000000',
    weatherCode: 0,
    cloudLevel: 0,
    isCloudy: false,
    isRain: false,
    isShowingSun: false,
    isSnow: false,
    isThunder: false
  };

  constructor(private newSnackBar: PwSnackbar, private newDialog:PwDialog, private weatherService:WeatherService, private placeService:PlaceService) { }

  ngOnInit(): void {
    if(!this.isDefaultLocation){
      this.checkIsFavorite();
    }
    this.weatherCodeData = this.weatherService.getWeatherCodeData(this.weatherCode);
  }

  checkIsFavorite():void{
    this.isFavorite = this.placeService.getFavoritePlace(this.placeCode!) ? true : false;
    this.favoriteIconStatus = this.isFavorite? 'fa-solid fa-star': 'fa-regular fa-star';
  }

  toggleFavorite():void{
    if(!this.isFavorite){
      this.placeService.saveFavoritePlace({placeId: this.placeCode!, name: this.place});
      this.newSnackBar.openSnackbar('Ciudad agregada a favoritos');
      /*
      this.snackBar.open('Ciudad agregada a favoritos', '' ,{
        duration: 2000,
        horizontalPosition: 'left',
        panelClass: 'app-snackbar'
      });*/
    } else {
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
          this.placeService.deleteFavoritePlace(this.placeCode!);
          this.checkIsFavorite();
          this.newSnackBar.openSnackbar('Ciudad eliminada de favoritos');
        }
    });

    }
    this.checkIsFavorite();
  }
}
