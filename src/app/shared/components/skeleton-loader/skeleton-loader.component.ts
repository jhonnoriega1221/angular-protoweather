import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  host: {
    'class': 'pulse'
  },
  template: '',
  styles: [`
    :host {
      margin-bottom: 12px;
      display: block;
      width: var(--skeleton-width);
      height: var(--skeleton-height);
      margin: 0 auto 12px auto;

      background: linear-gradient(90deg, var(--angular-protoweather-surface-1) 8%, var(--angular-protoweather-surface-3) 18%, var(--angular-protoweather-surface-1) 33%);
      background-size: 200% 100%;
      border-radius: 12px;
      opacity: 0.7;
      animation: shine 1.5s cubic-bezier(0, 0, 0, 0) infinite;

    @keyframes shine {
      to{
        background-position-x: -200%;
      }
    }

    @keyframes pulse {
    0%{
        opacity: 1;
    }
    

    50%{
        opacity: 0.5;
    }

    100%{
        opacity: 1;
    }
  }
}
  `]
})
export class SkeletonLoaderComponent implements OnInit {

  public width: string = '';
  public height: string = '';
  public className:string = '';

  constructor(private host: ElementRef<HTMLElement>){}

  ngOnInit(): void {
      const host = this.host.nativeElement;
      
      if( this.className ){
        host.classList.add(this.className);
      }
      host.style.setProperty('--skeleton-width', this.width ?? '100%')
      host.style.setProperty('--skeleton-height', this.height ?? '20px')
  }

}
