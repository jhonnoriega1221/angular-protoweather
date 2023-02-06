import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-toggle]'
})
export class PwToggleDirective {

  @Input()

  @HostBinding('class') get classes(): string {
    const toggleClass:string[] = ['toggle'];

    return toggleClass.join(" ");
  }

  constructor() { }

}
