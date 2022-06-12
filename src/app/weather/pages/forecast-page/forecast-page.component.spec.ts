import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastPageComponent } from './forecast-page.component';

describe('ForecastPageComponent', () => {
  let component: ForecastPageComponent;
  let fixture: ComponentFixture<ForecastPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
