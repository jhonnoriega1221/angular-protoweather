import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualWeatherBackgroundComponent } from './actual-weather-background.component';

describe('ActualWeatherBackgroundComponent', () => {
  let component: ActualWeatherBackgroundComponent;
  let fixture: ComponentFixture<ActualWeatherBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualWeatherBackgroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualWeatherBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
