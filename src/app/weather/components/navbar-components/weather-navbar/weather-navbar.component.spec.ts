import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNavbarComponent } from './weather-navbar.component';

describe('WeatherNavbarComponent', () => {
  let component: WeatherNavbarComponent;
  let fixture: ComponentFixture<WeatherNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
