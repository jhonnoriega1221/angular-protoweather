import { Component, Input } from '@angular/core';

@Component({
  selector: 'pw-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.scss']
})
export class SkeletonComponent {

  @Input() width:string = '';
  @Input() height:string = '';
  @Input() padding:string = '12px';

}
