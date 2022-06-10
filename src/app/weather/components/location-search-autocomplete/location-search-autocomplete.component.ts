import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../../services/place.service';
import { Place } from '../../models/place';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-location-search-autocomplete',
  templateUrl: './location-search-autocomplete.component.html',
  styleUrls: ['./location-search-autocomplete.component.scss']
})
export class LocationSearchAutocompleteComponent implements OnInit {

  public input: string = '';
  public places: Place[] = [];
  private searchPlaceInterval: any = 0;

  constructor(private placeService: PlaceService) { }

  ngOnInit(): void {
  }

  getSearchPlaces(): void {
    if (this.input === '') {
      this.places = [];
    } else {
      clearTimeout(this.searchPlaceInterval);
      this.searchPlaceInterval = setTimeout(() => {
        this.placeService.search(this.input).subscribe(
          {
            next: (v) => { this.places = v },
            error: (e) => { },
            complete: () => { }
          }
        )
      }, 500);
    }
  }

  selectPlace(e: MatAutocompleteSelectedEvent) {
    const place:Place = this.places[e.option.value];
    this.placeService.setDefaultPlace(place.lat, place.lon, place.display_name);
  }

}
