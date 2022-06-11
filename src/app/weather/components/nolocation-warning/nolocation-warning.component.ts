import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nolocation-warning',
  templateUrl: './nolocation-warning.component.html',
  styleUrls: ['./nolocation-warning.component.scss']
})
export class NolocationWarningComponent implements OnInit {

  @Input() imageURL:string = '';
  @Input() title:string = '';
  @Input() message:string = '';

  constructor() { }

  ngOnInit(): void {
  }



}
