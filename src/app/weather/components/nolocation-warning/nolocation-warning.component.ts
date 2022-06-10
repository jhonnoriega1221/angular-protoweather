import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nolocation-warning',
  templateUrl: './nolocation-warning.component.html',
  styleUrls: ['./nolocation-warning.component.scss']
})
export class NolocationWarningComponent implements OnInit {

  @Input() imageURL:string = '';
  @Input() title:string = '';
  @Input() message:string = '';
  @Input() isSearchingLocation:boolean = false;
  @Output() emitGetLocation: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public getLocation(){
    this.emitGetLocation.emit();
  }

}
