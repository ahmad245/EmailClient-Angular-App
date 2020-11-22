import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { SigninFormService } from './signin-form.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinForm:FormGroup;
  formConfig;
  constructor(private sf:SigninFormService ,private aS:AuthService,private route:Router) {
    this.signinForm=this.sf.creatForm();
    this.formConfig=this.sf.config;
   }

  ngOnInit(): void {
  
  }
  onSubmit(){
    if(this.signinForm.invalid) return;
       
      this.aS.signin(this.signinForm.value).subscribe({
       next:response=>{
           this.route.navigateByUrl('/inbox');
       },
       error:({error})=>{
         if(error.username||error.password){
           this.signinForm.setErrors({credentials:true})
         }
       }
        
      })
     
  }

}
