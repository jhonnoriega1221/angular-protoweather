import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-outline-button]'
})
export class PwOutlineButtonDirective {

  @Input() color?:'primary'|'error';

  @HostBinding('class') get classes(): string {
    const btnClass:string[] = ['button outline-button'];

    switch(this.color){
      case "primary":
        btnClass.push('outline-button-primary');
        break;
      case "error":
        btnClass.push('outline-button-error')
        break;
    }

    return btnClass.join(" ");

  }
}