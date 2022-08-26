import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {take, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router){}
  /*canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    if(!this.authService.isUserAuthentificated){
      this.router.navigateByUrl('/log-in');
    }
    return this.authService.isUserAuthentificated;
  }*/

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isUserAuthentificated
      .pipe(take(1), tap(isAuthenticated => {
        if(!isAuthenticated){
          this.router.navigateByUrl('/log-in');
        }
      }));
  }
}
