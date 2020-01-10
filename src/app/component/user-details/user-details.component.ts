import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../../sevices/user-api.service';
import { Data, User } from './../../models/user-data.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: User[] = [];

  constructor(private UserApiService: UserApiService) {
  }

  ngOnInit() {
    this.getter();
  }

  getter() {
    this.UserApiService.getuser().subscribe(
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
