import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wrapper-header',
  templateUrl: './wrapper-header.component.html',
  styleUrls: ['./wrapper-header.component.scss']
})
export class WrapperHeaderComponent implements OnInit {

  @Input() text:string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
