import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-outline-button]'
})
export class PwOutlineButtonDirective {

  @Input() color?:'primary'|'error';
  @Input() size?: 'normal'|'small' = 'normal';

  @HostBinding('class') get classes(): string {
    const btnClass:string[] = ['button outline-button'];
    
    if(this.size == 'small'){
        btnClass.push('button-small');
    }
    
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