import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place';
import { MatAutocompleteSelectedEvent as MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-location-search-autocomplete',
  templateUrl: './location-search-autocomplete.component.html',
  styleUrls: ['./location-search-autocomplete.component.scss']
})
export class LocationSearchAutocompleteComponent implements OnInit {

  public input: string = '';
  public isSearching:boolean = false;
  public places: Place[] = [];
  private searchPlaceInterval: any = 0;
  @Output() locationSelected: EventEmitter<any> = new EventEmitter();

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

  getSearchPlaces(): void {
    this.places = [];
    clearTimeout(this.searchPlaceInterval);
    if (this.input === '') {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      
      this.searchPlaceInterval = setTimeout(() => {
        this.placeService.search(this.input).subscribe(
          {
            next: (v) => { this.places = v },
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

  selectPlace(e: MatAutocompleteSelectedEvent) {
    const place:Place = this.places[e.option.value];
    this.input = place.display_name;
    this.locationSelected.emit(place);
  }

}
