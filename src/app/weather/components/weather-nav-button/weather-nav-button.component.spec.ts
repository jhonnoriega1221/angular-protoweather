import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNavButtonComponent } from './weather-nav-button.component';

describe('WeatherNavButtonComponent', () => {
  let component: WeatherNavButtonComponent;
  let fixture: ComponentFixture<WeatherNavButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherNavButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherNavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
