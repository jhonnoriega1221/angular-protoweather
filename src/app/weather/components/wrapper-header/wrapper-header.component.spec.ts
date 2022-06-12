import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperHeaderComponent } from './wrapper-header.component';

describe('WrapperHeaderComponent', () => {
  let component: WrapperHeaderComponent;
  let fixture: ComponentFixture<WrapperHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WrapperHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
