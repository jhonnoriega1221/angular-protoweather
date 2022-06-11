import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetlocationAutocompleteDialogComponent } from './setlocation-autocomplete-dialog.component';

describe('SetlocationAutocompleteDialogComponent', () => {
  let component: SetlocationAutocompleteDialogComponent;
  let fixture: ComponentFixture<SetlocationAutocompleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetlocationAutocompleteDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetlocationAutocompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
