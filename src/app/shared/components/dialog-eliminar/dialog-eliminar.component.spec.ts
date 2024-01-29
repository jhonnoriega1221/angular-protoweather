import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEliminarComponent } from './dialog-eliminar.component';

describe('DialogEliminarComponent', () => {
  let component: DialogEliminarComponent;
  let fixture: ComponentFixture<DialogEliminarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEliminarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEliminarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
