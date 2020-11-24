import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/modals/dialog/dialog.component';
import { MyDialogServiceService } from 'src/app/shared/my-dialog-service.service';
import { EmailFormComponent } from '../email-form/email-form.component';
import { EmailService } from '../email.service';
import { IEmailSummary } from '../interfaces/email';
import { NotFoundComponent } from '../not-found/not-found.component';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {

  animal: string;
  name: string;
  email:IEmailSummary={
    id:'',
    from:'',
    subject:'',
    to:'',
    text:'',
    html:''
  }

  constructor(
  
    private eS:EmailService,
    private dS:MyDialogServiceService) {}

  openDialog(): void {
  
    this.eS.setFormData(this.email);
    // const dialogRef = this.dialog.open(DialogComponent, {
    //   width: '250px',
    //   data: {component:EmailFormComponent}
    // });
    const dialogRef=  this.dS.open(EmailFormComponent,{})

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
    
  }

  ngOnInit(): void {
  }

}
