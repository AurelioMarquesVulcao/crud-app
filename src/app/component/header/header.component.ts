import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  showMenu: boolean = false;

  constructor(private authservice: AuthService){

  }

  ngOnit(){
    this.authservice.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );

  }

}
