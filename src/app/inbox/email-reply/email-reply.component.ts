import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';
import { MyDialogServiceService } from 'src/app/shared/my-dialog-service.service';
import { EmailFormComponent } from '../email-form/email-form.component';
import { EmailService } from '../email.service';
import { IEmailSummary } from '../interfaces/email';

@Component({
  selector: 'app-email-reply',
  templateUrl: './email-reply.component.html',
  styleUrls: ['./email-reply.component.scss']
})
export class EmailReplyComponent implements OnInit {

  @Input() email:IEmailSummary;
 
  constructor(private dS:MyDialogServiceService,private eS:EmailService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }
  openDialog(): void {

    this.eS.setFormData(this.email);
    const dialogRef = this.dS.open(EmailFormComponent, {
      
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }

 

}
