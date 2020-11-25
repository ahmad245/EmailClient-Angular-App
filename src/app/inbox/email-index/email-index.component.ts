import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEmail } from '../interfaces/email';
import { EmailService } from '../email.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit, OnDestroy {
  subscriptions=new Subscription();
  emails:IEmail[]=[];
  constructor(private eS:EmailService) { }
  

  ngOnInit(): void {
  this.subscriptions.add(
      this.eS.get().subscribe((emails)=>{
     console.log(emails);
     
      this.emails=emails
    })
  )
  }
  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }
}
