import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindInfoComponent } from './wind-info.component';

describe('WindInfoComponent', () => {
  let component: WindInfoComponent;
  let fixture: ComponentFixture<WindInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WindInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
