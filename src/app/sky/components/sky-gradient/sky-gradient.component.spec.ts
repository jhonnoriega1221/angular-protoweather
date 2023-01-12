import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkyGradientComponent } from './sky-gradient.component';

describe('SkyGradientComponent', () => {
  let component: SkyGradientComponent;
  let fixture: ComponentFixture<SkyGradientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkyGradientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkyGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
