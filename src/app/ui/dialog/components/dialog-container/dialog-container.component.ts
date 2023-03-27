import { Component, Input, ViewContainerRef, AfterViewInit, ViewChild, ComponentRef, ElementRef } from '@angular/core';

@Component({
  selector: 'pw-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements AfterViewInit {
  
  @ViewChild("vc", {read: ViewContainerRef}) vc!:ViewContainerRef;
  @ViewChild('DialogRef') dialogRef!: ElementRef<HTMLDialogElement>;
  @Input() componentContent!:ComponentRef<any>;

  ngAfterViewInit(): void {
    setTimeout(() => {
      const view = this.vc.insert(this.componentContent.hostView);
      const lel = this.dialogRef.nativeElement.showModal();
    },0);
    
  }

}
