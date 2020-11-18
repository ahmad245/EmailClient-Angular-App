import { Validator } from '@angular/forms';

export class MatchPassword  implements Validator{
   
    validate(control: import("@angular/forms").AbstractControl): import("@angular/forms").ValidationErrors {
        const {password,confirmPassword}=control.value;
        return password===confirmPassword ? null : {passwordMatch:true}   
    }
   

}
