import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSearchAutocompleteComponent } from './location-search-autocomplete.component';

describe('LocationSearchAutocompleteComponent', () => {
  let component: LocationSearchAutocompleteComponent;
  let fixture: ComponentFixture<LocationSearchAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationSearchAutocompleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSearchAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
