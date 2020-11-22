import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { IEmail, IEmailSummary } from './interfaces/email';
import { EmailService } from './email.service';
import { Observable, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailResolverService implements Resolve<IEmailSummary> {

  constructor(private eS:EmailService,private route:Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IEmailSummary | Observable<IEmailSummary> | Promise<IEmailSummary> {  
     return this.eS.getById(route.params.id).pipe(
       catchError((err)=>{
         this.route.navigateByUrl('/inbox/not-found');
         return EMPTY;
       })
     )
  }
}
