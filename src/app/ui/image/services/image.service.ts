import { ElementRef, Injectable, QueryList, ViewChildren } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  load(url:string): Observable<Event> {
    const img = new Image();
    const loaded = new Subject<Event>();
    img.src = url;
    img.onload = (event) => {
      loaded.next(event);
      loaded.complete();
    }
    return loaded.asObservable();
  }
}
