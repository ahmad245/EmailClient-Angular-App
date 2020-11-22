import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmail, IEmailSummary } from '../interfaces/email';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {

  email:IEmailSummary;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.data.subscribe(({email})=>{
      this.email=email
    })
  }

}
