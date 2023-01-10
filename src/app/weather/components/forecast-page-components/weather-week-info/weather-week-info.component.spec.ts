import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherWeekInfoComponent } from './weather-week-info.component';

describe('WeatherWeekInfoComponent', () => {
  let component: WeatherWeekInfoComponent;
  let fixture: ComponentFixture<WeatherWeekInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherWeekInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherWeekInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
