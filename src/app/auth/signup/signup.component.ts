import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  SignupFormService } from './signup-form.service';
import { FieldConfig } from 'src/app/shared/models';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignupComponent implements OnInit {

  signupForm:FormGroup;
  formConfig;
  constructor(private sf:SignupFormService ,private aS:AuthService,private route:Router) {
    this.signupForm=this.sf.creatForm();
    this.formConfig=this.sf.config;
   }

  ngOnInit(): void {
  
  }
  onSubmit(){
    if(this.signupForm.invalid) return;

       console.log(this.signupForm.value);
       
      this.aS.signup(this.signupForm.value).subscribe({
        next:response=>{
          this.route.navigateByUrl('/inbox');
        },
        error:err=>{
          if(!err.status){
            this.signupForm.setErrors({noConnection:true})
          }
          else{
            this.signupForm.setErrors({unKnownError:true})
          }
        }
        
      })
     
  }

}
