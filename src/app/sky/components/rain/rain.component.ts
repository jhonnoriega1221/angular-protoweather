import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/ui/image/services/image.service';

@Component({
  selector: 'pw-rain',
  templateUrl: './rain.component.html',
  styleUrls: ['./rain.component.scss']
})
export class RainComponent implements AfterViewInit{

  @ViewChild('imageLoader') image!:ElementRef<HTMLImageElement>;

  constructor(private imageService: ImageService){}

  ngAfterViewInit(): void {
      this.imageService.load('/assets/weather_backgrounds/rain.webp').subscribe( () => {
        this.image.nativeElement.classList.add('loaded');
      } )
  }
}
