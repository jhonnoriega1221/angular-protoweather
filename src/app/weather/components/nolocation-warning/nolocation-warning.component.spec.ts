import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NolocationWarningComponent } from './nolocation-warning.component';

describe('NolocationWarningComponent', () => {
  let component: NolocationWarningComponent;
  let fixture: ComponentFixture<NolocationWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NolocationWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NolocationWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
