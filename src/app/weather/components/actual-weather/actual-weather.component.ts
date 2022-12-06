//https://icons8.com/icon/set/weather/color
// [ngStyle]="{'background-image': 'url('+ actualBackground.backgroundURL+')'}"
import { Component, OnInit, Input } from '@angular/core';
import { WeatherCode } from '../../models/weatherCode';
import { WeatherService } from '../../services/weather.service';
import { PlaceService } from '../../services/place.service';

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

  @Input() placeCode:string = '';
  @Input() isDefaultLocation:boolean = false;

  public weatherCodeData:WeatherCode = {
    backgroundURL: '',
    description: '',
    iconURL: '',
    textColor: 'black',
    weatherCode: 0
  };

  constructor( private weatherService:WeatherService, private placeService:PlaceService ) { }

  ngOnInit(): void {
    if(!this.isDefaultLocation){
      this.checkIsFavorite();
    }
    this.weatherCodeData = this.weatherService.getWeatherCodeData(this.weatherCode);
  }

  checkIsFavorite():void{
    this.isFavorite = this.placeService.getFavoritePlace(this.placeCode) ? true : false;
    this.favoriteIconStatus = this.isFavorite? 'fa-solid fa-star': 'fa-regular fa-star';
  }

  toggleFavorite():void{
    if(!this.isFavorite){
      this.placeService.saveFavoritePlace({placeId: this.placeCode, name: this.place});
    } else {
      this.placeService.deleteFavoritePlace({placeId: this.placeCode, name: this.place});
    }
    this.checkIsFavorite();
  }
}
