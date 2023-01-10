import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[pw-text-button]'
})
export class PwTextButtonDirective {

  @Input() color?:'primary'|'error';
  @Input() size?: 'normal'|'small' = 'normal';

  @HostBinding('class') get classes(): string {
    const btnClass:string[] = ['button text-button'];
    
    if(this.size == 'small'){
        btnClass.push('button-small');
    }
    
    switch(this.color){
      case "primary":
        btnClass.push('text-button-primary');
        break;
      case "error":
        btnClass.push('text-button-error')
        break;
    }

    return btnClass.join(" ");

  }
}