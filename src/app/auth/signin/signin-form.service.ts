import { Injectable } from '@angular/core';
import { FieldConfig } from '../../shared/models';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SigninFormService {
  config: { [key: string]: FieldConfig } = {
    usernameConfig: {
      name: 'username', inputType: 'email', label: 'UserName',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
        { name: 'nonUniqueUsername', message: 'is exist', validator: 'nonUniqueUsername' },
      ]
    },
    passwordConfig: {
      name: 'password', inputType: 'password', label: 'Password',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },
      ]
    }
  }
  constructor() { }
  creatForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', 
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
    
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      
    })

  }
}
