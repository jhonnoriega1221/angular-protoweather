import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextHourWeatherComponent } from './next-hour-weather.component';

describe('NextHourWeatherComponent', () => {
  let component: NextHourWeatherComponent;
  let fixture: ComponentFixture<NextHourWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextHourWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextHourWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
