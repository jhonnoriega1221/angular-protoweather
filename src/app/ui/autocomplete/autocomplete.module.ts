import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './components/autocomplete/autocomplete.component';
import { AutocompleteDirective } from './directives/autocomplete.directive';
import { PwAutocompleteItemDirective } from './directives/autocomplete-item.directive';



@NgModule({
  declarations: [
    AutocompleteComponent,
    AutocompleteDirective,
    PwAutocompleteItemDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutocompleteComponent,
    AutocompleteDirective,
    PwAutocompleteItemDirective,
  ]
})
export class PwAutocompleteModule { }
