import { Component, OnInit } from '@angular/core';
import { IEmail } from '../interfaces/email';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit {

  emails:IEmail[]=[];
  constructor(private eS:EmailService) { }

  ngOnInit(): void {
    this.eS.get().subscribe((emails)=>{
     console.log(emails);
     
      this.emails=emails
    })
  }

}
