import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from '../../models/place';

@Component({
  selector: 'app-setlocation-autocomplete-dialog',
  templateUrl: './setlocation-autocomplete-dialog.component.html',
  styleUrls: ['./setlocation-autocomplete-dialog.component.scss']
})
export class SetlocationAutocompleteDialogComponent {

  @Output() closeDialogViaComponent = new EventEmitter();

  public placeSelected?:Place;

  public getLocationSelected(place:Place){
    if(place){
      this.placeSelected = place;
      this.closeDialogViaComponent.emit(place);
    }
  }

  public closeDialog(result?:boolean): void {
    this.closeDialogViaComponent.emit(undefined);
  }

}
