import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../../sevices/user-api.service';
import { Data, User } from './../../models/user-data.model';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {
  users: User[] = [];

  constructor(private UserApiService: UserApiService) {
  }

  ngOnInit() {
    this.getter();
  }

  getter() {
    this.UserApiService.getuser2().subscribe(
      (data: Data) => {
      console.log('Data', data);
      this.users = data.data;
    },
    (error: any) => {
      // this.erro = error;
      console.error('ERROR: ', error);
    })
  }
  post(){
    this.users
  }

  register() {
    console.log("Voce clicou no botao")
  }
}
