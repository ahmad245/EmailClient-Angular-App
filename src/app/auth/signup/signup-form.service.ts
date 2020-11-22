import { Injectable } from '@angular/core';
import { FieldConfig } from '../../shared/models';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';

@Injectable({
  providedIn: 'root'
})
export class SignupFormService {
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
    },

    passwordConfirmationConfig: {
      name: 'confirmPassword', inputType: 'password', label: 'Confirm P£assword',
      validations: [
        { name: 'required', message: 'must be required', validator: 'required' },
        { name: 'minlength', message: 'min length', validator: 'minLength' },
        { name: 'maxlength', message: 'max length', validator: 'minLength' },

      ]
    }
  }

  constructor(public uiqueUsername:UniqueUsername) { }

  creatForm(): FormGroup {
    return new FormGroup({
      username: new FormControl('', 
      [Validators.required, Validators.minLength(2), Validators.maxLength(20)],
      [this.uiqueUsername.validate]
      ),
      password: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      passwordConfirmation: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
    }, { validators: [new MatchPassword().validate] })

  }
}
