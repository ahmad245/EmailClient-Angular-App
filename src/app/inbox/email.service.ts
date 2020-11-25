import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmail, IEmailSummary } from './interfaces/email';
import { BehaviorSubject } from 'rxjs';

const rootUrl="https://api.angular-email.com";

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  formData=new BehaviorSubject<IEmailSummary>(null);
  formCreate=new BehaviorSubject<IEmailSummary>(null);
  formReply=new BehaviorSubject<IEmailSummary>(null);
  
  constructor(private http:HttpClient) { }

  get(){
   return  this.http.get<IEmail[]>(`${rootUrl}/emails`)
  }
  getById(id){
    return this.http.get<IEmailSummary>(`${rootUrl}/emails/${id}`)
  }
  setFormData(obj:IEmailSummary){
    this.formData.next(obj);
  }
  sendEmail(email){
    return this.http.post(`${rootUrl}/emails`,email);
  }
}
