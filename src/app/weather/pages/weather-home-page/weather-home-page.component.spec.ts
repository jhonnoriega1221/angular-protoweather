import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHomePageComponent } from './weather-home-page.component';

describe('WeatherHomePageComponent', () => {
  let component: WeatherHomePageComponent;
  let fixture: ComponentFixture<WeatherHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
