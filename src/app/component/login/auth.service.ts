import { Injectable, EventEmitter } from '@angular/core';
import { UserInchurch } from './user';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {

  private userAuthenticated: boolean = false;

  // It replaces the need to create unnecessary new
  // components between logged in and unlogged areas.
  // This way we look better at what we don't want to display to unlogged users.

  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(userinchurch: UserInchurch) {

    if (userinchurch.inputEmail === '@inchurch' &&
      userinchurch.inputPassword === 'God2020') {

      this.userAuthenticated = true;

      this.showMenuEmitter.emit(true);

      this.router.navigate(['user']);

    } else {
      this.userAuthenticated = false;

      this.showMenuEmitter.emit(false);
    }
  }

  userIsAuthenticated() {
    return this.userAuthenticated;
  }

}
