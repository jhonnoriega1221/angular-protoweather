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

      background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
      background-size: 200% 100%;
      animation: 1.5s shine linear infinite;
      border-radius: 12px;
    }

    @keyframes shine {
      to{
        background-position-x: -200%;
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
