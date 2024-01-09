import { Directive, EventEmitter, ElementRef, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[pw-autocomplete-item]'
})
export class PwAutocompleteItemDirective {

  @Output() optionSelected = new EventEmitter<number>();

  constructor(private el:ElementRef){}

  @HostBinding('class') get classes(): string {
    return "button text-button text-button-primary autocomplete-item"
  }

  @HostListener('click', ['$event'])
  onClick(){
    this.optionSelected.emit(this.el.nativeElement.value)
  }

}
