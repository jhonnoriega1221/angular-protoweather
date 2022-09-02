import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstTimeGuard implements CanActivateChild {
  constructor( private router:Router){}
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const firstTime = localStorage.getItem('ft');
      if (firstTime === 'false') {
        return true;
      } else {
        this.router.navigate(['/setlocation']);
        return false;
      }
  }
  
}
