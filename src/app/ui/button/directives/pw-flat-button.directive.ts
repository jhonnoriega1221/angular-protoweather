import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-flat-button]'
})
export class PwFlatButtonDirective {

  @Input() color?:'primary'|'error';
  @Input() size?: 'normal'|'small' = 'normal';

  @HostBinding('class') get classes(): string {
    const btnClass:string[] = ['button flat-button'];
    
    if(this.size == 'small'){
        btnClass.push('button-small');
    }

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