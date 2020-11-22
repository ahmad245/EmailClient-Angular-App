import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { AsyncValidator } from '@angular/forms';
import { tap, catchError, map, take, delay, startWith, skipWhile } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class UniqueUsername implements AsyncValidator{
    constructor(private authS:AuthService){

    }
    validate=(control: import("@angular/forms").AbstractControl): Promise<import("@angular/forms").ValidationErrors> | import("rxjs").Observable<import("@angular/forms").ValidationErrors> => {
       //  const {username}=control;
         
         return this.authS.usernameAvailable(control.value).pipe(
            
             map((value)=>{
                if(value.available) return null;
             }),
             
             catchError((err)=>{
                 return of({nonUniqueUsername:true})
             })
             
         )
        
    }
   

}
