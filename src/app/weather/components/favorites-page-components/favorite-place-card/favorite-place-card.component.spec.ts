import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritePlaceCardComponent } from './favorite-place-card.component';

describe('FavoritePlaceCardComponent', () => {
  let component: FavoritePlaceCardComponent;
  let fixture: ComponentFixture<FavoritePlaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritePlaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritePlaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
