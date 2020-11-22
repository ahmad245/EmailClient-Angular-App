import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmail, IEmailSummary } from './interfaces/email';

const rootUrl="https://api.angular-email.com";

@Injectable({
  providedIn: 'root'
})

export class EmailService {
  
  constructor(private http:HttpClient) { }

  get(){
   return  this.http.get<IEmail[]>(`${rootUrl}/emails`)
  }
  getById(id){
    return this.http.get<IEmailSummary>(`${rootUrl}/emails/${id}`)
  }
}
