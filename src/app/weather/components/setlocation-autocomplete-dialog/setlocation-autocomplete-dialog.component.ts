import { Component } from '@angular/core';
import { Place } from '../../models/place';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-setlocation-autocomplete-dialog',
  templateUrl: './setlocation-autocomplete-dialog.component.html',
  styleUrls: ['./setlocation-autocomplete-dialog.component.scss']
})
export class SetlocationAutocompleteDialogComponent {

  public placeSelected?:Place;

  public isDisabledSelectButton:boolean = true;

  constructor(public dialogRef: MatDialogRef<SetlocationAutocompleteDialogComponent>) {
    if (!("virtualKeyboard" in navigator)) {
      console.log('VIRTUALKEYBOARD API NOT SUPPORTED');
    }
  }

  public getLocationSelected(place:Place){
    if(place){
      this.placeSelected = place;
      this.isDisabledSelectButton = false;

      this.dialogRef.close(this.placeSelected);
    } else {
      this.isDisabledSelectButton = true;
    }
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
