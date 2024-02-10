import { AfterViewInit, Component, ElementRef, Input, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ImageService } from 'src/app/ui/image/services/image.service';

@Component({
  selector: 'pw-clouds',
  templateUrl: './clouds.component.html',
  styleUrls: ['./clouds.component.scss']
})
export class CloudsComponent implements AfterViewInit {

  @Input() cloudsLevel:number = 5;
  @Input() actualHour:number = 0;
  @Input() isCloudy:boolean = false;
  @ViewChildren('imageLoader') images!: QueryList<ElementRef<HTMLImageElement>>;

  constructor(private imageService: ImageService){}

  ngAfterViewInit(): void {
      this.images.forEach( (image) => {
        const cloudFileName = image.nativeElement.classList[1];
        this.imageService.load(`/assets/weather_backgrounds/${cloudFileName}.webp`).subscribe( () => {
          image.nativeElement.classList.add('loaded')
        } )
      } )
  }

}
