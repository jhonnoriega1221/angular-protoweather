import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualWeatherComponent } from './actual-weather.component';

describe('ActualWeatherComponent', () => {
  let component: ActualWeatherComponent;
  let fixture: ComponentFixture<ActualWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualWeatherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
