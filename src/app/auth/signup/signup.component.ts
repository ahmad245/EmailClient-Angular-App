import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthFormService } from '../auth-form.service';
import { FieldConfig } from 'src/app/shared/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  formConfig;
  constructor(private sf:AuthFormService) {
    this.signupForm=this.sf.creatForm();
    this.formConfig=this.sf.config;
   }

  ngOnInit(): void {
  
  }

}
