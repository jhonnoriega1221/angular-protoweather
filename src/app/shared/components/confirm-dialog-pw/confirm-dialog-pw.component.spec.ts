import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmDialogPwComponent } from './confirm-dialog-pw.component';

describe('ConfirmDialogPwComponent', () => {
  let component: ConfirmDialogPwComponent;
  let fixture: ComponentFixture<ConfirmDialogPwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmDialogPwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogPwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
