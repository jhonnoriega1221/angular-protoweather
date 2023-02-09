import { isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, OnInit, PLATFORM_ID, Inject } from '@angular/core';

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

      background: linear-gradient(90deg, var(--pw-surface-1) 8%, var(--pw-surface-3) 18%, var(--pw-surface-1) 33%);
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

  constructor(private host: ElementRef<HTMLElement>, @Inject(PLATFORM_ID) private platformId:any){}

  ngOnInit(): void {

      if(!isPlatformBrowser(this.platformId)) return;

      const host = this.host.nativeElement;
      
      if( this.className ){
        host.classList.add(this.className);
      }

      host.style.setProperty('--skeleton-width', this.width ?? '100%')
      host.style.setProperty('--skeleton-height', this.height ?? '20px')
  }

}
