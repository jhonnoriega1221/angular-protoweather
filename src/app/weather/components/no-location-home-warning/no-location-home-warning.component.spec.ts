import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLocationHomeWarningComponent } from './no-location-home-warning.component';

describe('NoLocationHomeWarningComponent', () => {
  let component: NoLocationHomeWarningComponent;
  let fixture: ComponentFixture<NoLocationHomeWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoLocationHomeWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoLocationHomeWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
