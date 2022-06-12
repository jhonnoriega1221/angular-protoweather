import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherSunsetInfoComponent } from './weather-sunset-info.component';

describe('WeatherSunsetInfoComponent', () => {
  let component: WeatherSunsetInfoComponent;
  let fixture: ComponentFixture<WeatherSunsetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherSunsetInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherSunsetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
