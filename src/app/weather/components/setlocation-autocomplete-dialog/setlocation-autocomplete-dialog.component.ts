import { Component, Inject, OnInit } from '@angular/core';
import { Place } from '../../models/place';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PlaceService } from '../../services/place.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setlocation-autocomplete-dialog',
  templateUrl: './setlocation-autocomplete-dialog.component.html',
  styleUrls: ['./setlocation-autocomplete-dialog.component.scss']
})
export class SetlocationAutocompleteDialogComponent implements OnInit {

  private placeSelected:Place = {
    place_id: 0,
    lat: '',
    lon: '',
    display_name: ''
  };

  public isDisabledSelectButton:boolean = true;

  constructor(public dialogRef: MatDialogRef<SetlocationAutocompleteDialogComponent>, private placeService:PlaceService, private routerService:Router) { }

  ngOnInit(): void {
  }

  public getLocationSelected(place:Place){
    if(place){
      this.placeSelected = place;
      this.isDisabledSelectButton = false;
    } else {
      this.isDisabledSelectButton = true;
    }
  }

  public setDefaultPlace(){
    this.placeService.setDefaultPlace(this.placeSelected.lat, this.placeSelected.lon, this.placeSelected.display_name)
    this.routerService.navigate(['/']);
    this.dialogRef.close();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }

}
