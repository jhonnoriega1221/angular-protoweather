import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFavoritePlaceCardComponent } from './add-favorite-place-card.component';

describe('AddFavoritePlaceCardComponent', () => {
  let component: AddFavoritePlaceCardComponent;
  let fixture: ComponentFixture<AddFavoritePlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFavoritePlaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFavoritePlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
