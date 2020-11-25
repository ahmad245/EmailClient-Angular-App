import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EMPTY, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
export class EmailReplyComponent implements OnInit,OnDestroy {
  subscriptions=new Subscription();
  @Input() email:IEmailSummary;
 
  constructor(private dS:MyDialogServiceService,private eS:EmailService) {}
 

  ngOnInit(): void {
 this.subscriptions.add(
   this.eS.formReply
   .pipe(
     switchMap((data)=>{
       if(data)return this.eS.sendEmail(data);
       return EMPTY
       
     })
   )
   .subscribe((data)=>{
     console.log(data);
     
   })
 )
    
  }
  openDialog(): void {

    this.eS.setFormData(this.email);
    const dialogRef = this.dS.open(EmailFormComponent, {
      
    });
    

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe()
  }

}
