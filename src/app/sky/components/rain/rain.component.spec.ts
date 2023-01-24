import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainComponent } from './rain.component';

describe('RainComponent', () => {
  let component: RainComponent;
  let fixture: ComponentFixture<RainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
