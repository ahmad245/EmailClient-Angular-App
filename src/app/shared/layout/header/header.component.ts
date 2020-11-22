import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth=false;
  
  constructor(private aS:AuthService) { }

  ngOnInit(): void {
   this.aS.signedin$.subscribe((isAuth)=>{
     this.isAuth=isAuth;
   })
  }

}
