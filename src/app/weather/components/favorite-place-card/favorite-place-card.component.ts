import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-favorite-place-card',
  templateUrl: './favorite-place-card.component.html',
  styleUrls: ['./favorite-place-card.component.scss']
})
export class FavoritePlaceCardComponent implements OnInit {

  @Input() name:string | undefined = '';
  @Input() placeId:string = '';
  @Input() isDefaultPlace:boolean = false;
  @Input() isEditMode:boolean = false;

  @Output() deletePlace: EventEmitter<any> = new EventEmitter();

  public url:string[] = [];

  ngOnInit():void {
    this.url = this.setRouterUrl();
  }

  private setRouterUrl():string[] {
    return this.isDefaultPlace ? ['/'] : ['/forecast/', this.placeId];
  }

  public deleteActionButton(){
    this.deletePlace.emit();
  }

}
