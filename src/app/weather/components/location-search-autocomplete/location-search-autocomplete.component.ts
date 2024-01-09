import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place';
import { MatAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Subscription } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location-search-autocomplete',
  templateUrl: './location-search-autocomplete.component.html',
  styleUrls: ['./location-search-autocomplete.component.scss']
})
export class LocationSearchAutocompleteComponent implements OnInit {

  public input: string = '';
  public isSearching:boolean = false;
  public searchPlaceResults$: Place[] = [];
  private searchPlaceInterval: any = 0;

  private searchSubscription?:Subscription;

  @Output() locationSelected: EventEmitter<any> = new EventEmitter();
  public searchForm:FormGroup;

  constructor(private placeService: PlaceService, private fb:FormBuilder) {
    this.searchForm = this.fb.group({
      searchInput: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  getSearchPlaces(): void {
    this.searchPlaceResults$ = [];
    this.searchSubscription?.unsubscribe();
    this.isSearching = false;
    clearTimeout(this.searchPlaceInterval);
    const inputValue = this.searchForm.get('searchInput')!.value;
    
    if (inputValue) {
      this.isSearching = true;
      this.searchPlaceInterval = setTimeout(() => {
        this.searchSubscription = this.placeService.search(inputValue).pipe().subscribe(
          {
            next: (searchPlacesResponse:Place[]) => { 
              searchPlacesResponse.forEach( (place) => {place.display_name = this.placeService.setLocationName(
                place.address?.country,
                place.address?.city,
                place.address?.county,
                place.address?.town,
                place.address?.village,
                place.address?.state
              )});
              this.searchPlaceResults$ = searchPlacesResponse;
            },
            error: (e) => {
              console.log(e);
              this.isSearching = false;
            },
            complete: () => { this.isSearching = false }
          }
        )
      }, 400);
    }
  }

  selectPlace(value:number) {
    const place:Place = this.searchPlaceResults$[value];
    this.searchForm.controls['searchInput'].setValue('');
    this.searchPlaceResults$ = [];
    this.locationSelected.emit(place);
  }
}
