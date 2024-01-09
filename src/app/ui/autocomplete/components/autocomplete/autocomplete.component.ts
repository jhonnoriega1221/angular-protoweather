import { AfterContentInit, AfterViewInit, Component, ContentChildren, ElementRef, EventEmitter, Output, QueryList, ViewChild } from '@angular/core';
import { PwAutocompleteItemDirective } from '../../directives/autocomplete-item.directive';

@Component({
  selector: 'pw-autocomplete',
  template: `
    <div #autocompleteElementRef class="autocomplete">
      <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./autocomplete.component.scss'],
  exportAs: 'pwAutocomplete'
})
export class AutocompleteComponent implements AfterContentInit {

  @ContentChildren(PwAutocompleteItemDirective) items! : QueryList<PwAutocompleteItemDirective>
  @ViewChild('autocompleteElementRef') autocompleteElementRef!: ElementRef<HTMLDivElement>;
  @Output() optionSelected = new EventEmitter<number>();

  ngAfterContentInit(): void {
      this.items.changes.subscribe( (items: QueryList<PwAutocompleteItemDirective>) => {
        console.log(items)
        if(items.length === 0) {
          this.hide();
          return;
        }
        items.forEach(item => {
          item.optionSelected.subscribe(value => {
            this.optionSelected.emit(value);
          })
        })
      } )
  }
  
  show(){
    const autocompleteElement = this.autocompleteElementRef.nativeElement;
    autocompleteElement.style.display= 'block';
  }

  hide(){
    const autocompleteElement = this.autocompleteElementRef.nativeElement;
    autocompleteElement.style.display= 'none';
  }
}
