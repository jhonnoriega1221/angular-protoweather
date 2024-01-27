import { AfterViewInit, ComponentRef, Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { AutocompleteComponent } from '../components/autocomplete/autocomplete.component';

@Directive({
  selector: '[pwAutocomplete]'
})
export class AutocompleteDirective {

  @Input('pwAutocomplete') pwAutocomplete!: AutocompleteComponent;

  constructor(private el:ElementRef) { 
  }

  @HostListener('focus')
  onFocus(){
    setTimeout(() => {
      this.pwAutocomplete.show();
    }, 0);
  }

   @HostListener('blur')
  onBlur(){
    setTimeout(() => {
      this.pwAutocomplete.hide();

    }, 100);
  }

  @HostListener('input')
  onInput(){
    this.pwAutocomplete.show();
  }

}
