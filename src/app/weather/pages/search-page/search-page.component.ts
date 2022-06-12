import { Component, OnInit } from '@angular/core';
import { Place } from '../../models/place';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor( private routerService:Router) { }

  ngOnInit(): void {
  }

  public searchLocation(place:Place){
    this.routerService.navigate(['/forecast/',place.place_id ])
  }

}
