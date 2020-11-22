import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(private aS:AuthService, private route:Router) {
    
   }

  ngOnInit(): void {
  this.aS.signout().subscribe(()=>{
    this.route.navigateByUrl('/')
  })
    
  }

}
