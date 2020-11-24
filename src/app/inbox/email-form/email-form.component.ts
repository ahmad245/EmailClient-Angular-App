import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';
import { EmailService } from '../email.service';
import { IEmail, IEmailSummary } from '../interfaces/email';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  email: IEmailSummary;
  constructor(
    private eS: EmailService,
    public dialog: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.email = this.eS.formData.getValue();

    const { from, subject, to, text } = this.email;
    this.emailForm = new FormGroup({
      from: new FormControl(from),
      subject: new FormControl(subject),
      to: new FormControl(to),
      text: new FormControl(text),
     
    });
    this.eS.formData.subscribe((email) => {
      this.emailForm.setControl('form', new FormControl(email.from));
      this.emailForm.setControl('subject', new FormControl(email.subject));
      this.emailForm.setControl('to', new FormControl(email.to));
      this.emailForm.setControl('text', new FormControl(email.text));
     
    });
  }
  onSubmit() {
    if(this.dialog?.id){
    let stat=  this.dialog.close()
    
    }
   
    
   
  }
}
