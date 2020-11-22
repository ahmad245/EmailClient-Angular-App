import { Validator } from '@angular/forms';

export class MatchPassword  implements Validator{
   
    validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
        const {password,passwordConfirmation}=control.value;
        return password===passwordConfirmation ? null : {passwordMatch:true}   
    }
   

}
