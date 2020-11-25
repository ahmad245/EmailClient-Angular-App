import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEmail, IEmailSummary } from '../interfaces/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit , OnDestroy {
  subscriptions = new Subscription();

  email:IEmailSummary;
  constructor(private route:ActivatedRoute) { }
 

  ngOnInit(): void {
  this.subscriptions.add(
      this.route.data.subscribe(({email})=>{
      this.email=email
    })
  )
  }
  ngOnDestroy(): void {
   this.subscriptions.unsubscribe();
  }
}
