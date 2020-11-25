import { Component, OnDestroy, OnInit } from '@angular/core';

import { EMPTY, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MyDialogServiceService } from 'src/app/shared/my-dialog-service.service';
import { EmailFormComponent } from '../email-form/email-form.component';
import { EmailService } from '../email.service';
import { IEmailSummary } from '../interfaces/email';


@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss'],
})
export class EmailCreateComponent implements OnInit, OnDestroy {
  subscriptions = new Subscription();
  animal: string;
  name: string;
  email: IEmailSummary = {id: '',from: 'ahmad123@angular-email.com',subject: '',to: '',text: '',html: ''
  };

  constructor(private eS: EmailService, private dS: MyDialogServiceService) {}

  openDialog(): void {
    this.eS.setFormData(this.email);
    const dialogRef = this.dS.open(EmailFormComponent, {});
    this.subscriptions.add(
      dialogRef.afterClosed().subscribe((result) => {
        console.log('The dialog was closed');
        this.animal = result;
      })
    );
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.eS.formCreate
        .pipe(
          switchMap((data) => {
            if (data) return this.eS.sendEmail(data);
            return EMPTY;
          })
        )
        .subscribe((data) => {
          console.log(data);
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
