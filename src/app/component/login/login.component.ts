import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { UserInchurch } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userinchurch: UserInchurch = new UserInchurch();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  doLogin() {
    console.log(this.userinchurch); // Delete when put to production
    this.authService.doLogin(this.userinchurch);
  }

}
