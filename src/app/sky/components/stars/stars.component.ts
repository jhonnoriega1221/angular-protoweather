import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/ui/image/services/image.service';

@Component({
  selector: 'pw-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.scss']
})
export class StarsComponent implements AfterViewInit {

  @Input() actualHour:number = 0;
  @ViewChild('imageLoader') image!:ElementRef<HTMLImageElement>;

  constructor(private imageService:ImageService){}

  ngAfterViewInit(): void {
      this.imageService.load('/assets/weather_backgrounds/stars.webp').subscribe( () => {
        this.image.nativeElement.classList.add('loaded');
      })
  }

}
