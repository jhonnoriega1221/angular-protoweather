import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite-place-card',
  templateUrl: './favorite-place-card.component.html',
  styleUrls: ['./favorite-place-card.component.scss']
})
export class FavoritePlaceCardComponent implements OnInit {

  @Input() name:string | undefined = '';
  @Input() placeId:string = '';
  @Input() isDefaultPlace:boolean = false;

  public url:string[] = [];

  ngOnInit():void {
    this.url = this.setRouterUrl();
  }

  private setRouterUrl():string[] {
    return this.isDefaultPlace ? ['/'] : ['/forecast/', this.placeId];
  }

}
