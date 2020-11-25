import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';
import { EmailService } from '../email.service';
import { IEmail, IEmailSummary } from '../interfaces/email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  subscriptions=new Subscription();
  emailForm: FormGroup;
  email: IEmailSummary;
  constructor(
    private eS: EmailService,
    public dialog: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    // this.email = this.eS.formData.getValue();

    // const { from, subject, to, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl({value:'ahmad123@angular-email.com',disabled:true}),
      subject: new FormControl(),
      to: new FormControl(),
      text: new FormControl(),
     
    });
   this.subscriptions.add(this.eS.formData.subscribe((email) => {
      if(email){
        this.email=email
        this.emailForm.setControl('from', new FormControl({value:'ahmad123@angular-email.com',disabled:true}));
        this.emailForm.setControl('subject', new FormControl(email.subject,[Validators.required]));
        this.emailForm.setControl('to', new FormControl(email.to,[Validators.required]));
        this.emailForm.setControl('text', new FormControl(email.text,[Validators.required]));
      }
    
     
    }));
  }
  onSubmit() {
    if(this.emailForm.invalid){
      this.eS.formCreate.next(null);
      return;
    }
    if(this.dialog?.id && this.email?.id ==''){
      this.eS.formCreate.next(this.emailForm.value);
      this.dialog.close()
    }
    else{
      this.eS.formReply.next({...this.emailForm.value,id:this.email.id});
      this.dialog.close()
    }
  }
  ngOnDestroy() {
   
    
    this.subscriptions.unsubscribe();
  }
}
