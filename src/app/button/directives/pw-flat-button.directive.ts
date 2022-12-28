import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-flat-button]'
})
export class PwFlatButtonDirective {

  @Input() color?:'primary'|'error';

  @HostBinding('class') get classes(): string {
    const btnClass:string[] = ['button flat-button'];

    switch(this.color){
      case "primary":
        btnClass.push('flat-button-primary');
        break;
      case "error":
        btnClass.push('flat-button-error')
        break;
    }

    return btnClass.join(" ");

  }
}