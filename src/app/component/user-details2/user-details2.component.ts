import { Component, OnInit } from '@angular/core';
import { UserApiService } from 'src/app/sevices/user-api.service';
import { Data, User } from './../../models/user-data.model';

@Component({
  selector: 'app-user-details2',
  templateUrl: './user-details2.component.html',
  styleUrls: ['./user-details2.component.css']
})
export class UserDetails2Component implements OnInit {
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

  register() {
    console.log("Voce clicou no botao")
  }
}
