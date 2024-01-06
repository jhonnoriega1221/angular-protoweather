import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from '../../models/place';
import { MatDialogRef} from '@angular/material/dialog';

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
      this.closeDialog(true);
    }
  }

  public closeDialog(result?:boolean): void {
    this.closeDialogViaComponent.emit(undefined);
  }

}
