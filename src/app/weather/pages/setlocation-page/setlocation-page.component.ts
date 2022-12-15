import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

interface Message {
  title: string;
  message: string;
  imageURL: string;
}

@Component({
  selector: 'app-setlocation-page',
  templateUrl: './setlocation-page.component.html',
  styleUrls: ['./setlocation-page.component.scss']
})
export class SetlocationPageComponent implements OnInit {

  public warningInfo = {
    title: '',
    message: '¿Como quieres indicar tu ciudad por defecto?',
    imageURL: "../../../../assets/location-1.svg"
  }
  private nextUrl:null|string = '/';

  constructor(private routerService: Router, private activatedRoute:ActivatedRoute, private locationService:Location) { }

  ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this.nextUrl = params['nextUrl'] ? params['nextUrl'] : '/';
      })
  }
  
  public showLocationErrorMessage(message: Message) {
    this.warningInfo = {
      title: message.title,
      message: message.message,
      imageURL: message.imageURL
    }
  }

  public goToHome() {
    localStorage.setItem('ft', 'false');
    setTimeout(() => {
      this.routerService.navigate([this.nextUrl]);
    }, 500);
  }

  public goBack(){
    this.locationService.back();
  }

}
