import { isPlatformBrowser } from '@angular/common';
import { Directive, Input, TemplateRef, ViewContainerRef, SimpleChanges, PLATFORM_ID, Inject } from '@angular/core';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';

@Directive({
  selector: '[pw-skeleton]'
})
export class PwSkeletonDirective {

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainerRef: ViewContainerRef,
    @Inject(PLATFORM_ID) private _platformId:any
  ) { }

  @Input('pw-skeleton') public isLoading:boolean = true;
  @Input('pw-skeletonWidth') public width: string = '';
  @Input('pw-skeletonHeight') public height: string = '';
  @Input('pw-skeletonPadding') public padding: string = '';

  ngOnChanges(changes: SimpleChanges): void {

    if(isPlatformBrowser(this._platformId)) this._viewContainerRef.clear();

    if (changes['isLoading'].currentValue) {
        const ref = this._viewContainerRef.createComponent(SkeletonComponent);

        Object.assign(ref.instance, {
          width: this.width,
          height: this.height,
          padding: this.padding
        })
    }

    if (!changes['isLoading'].currentValue) {
      this._viewContainerRef.createEmbeddedView(this._templateRef);
    }
  }
}
