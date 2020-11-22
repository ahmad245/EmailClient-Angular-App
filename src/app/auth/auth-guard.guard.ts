import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { CanLoad, Route, UrlSegment, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { skipWhile, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private authS:AuthService, private route:Router){

  }
  canLoad(
    route: Route, 
  segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
   return  this.authS.signedin$.pipe(
      skipWhile((value)=>value===null),
      take(1),
      tap((authenticated)=>{
        if(!authenticated) this.route.navigateByUrl('/')
      })
    )
  }
  
  
}
