import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'emailclient';
  isAuth=false;
  constructor(private aS:AuthService) {
    
  }
  ngOnInit(): void {
    this.aS.checkAuth().subscribe(()=>{})
    
  }
}
