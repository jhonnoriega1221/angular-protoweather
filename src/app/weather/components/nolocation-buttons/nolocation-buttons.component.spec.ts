import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolocationButtonsComponent } from './nolocation-buttons.component';

describe('NolocationButtonsComponent', () => {
  let component: NolocationButtonsComponent;
  let fixture: ComponentFixture<NolocationButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NolocationButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NolocationButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
