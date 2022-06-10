import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlocationPageComponent } from './setlocation-page.component';

describe('SetlocationPageComponent', () => {
  let component: SetlocationPageComponent;
  let fixture: ComponentFixture<SetlocationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetlocationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlocationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
