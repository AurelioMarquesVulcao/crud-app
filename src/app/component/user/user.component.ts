import { Component, OnInit, TemplateRef } from '@angular/core';
import { UserApiService } from './../../sevices/user-api.service';
import { Data, User } from './../../models/user-data.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})
export class UserComponent implements OnInit {
  users: User[] = [];
  users2: User[] = [];

  constructor(private UserApiService: UserApiService) {
  }

  ngOnInit() {
    this.getter();
    this.getter2();
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
  getter2() {
    this.UserApiService.getuser2().subscribe(
      (data: Data) => {
        console.log('Data', data);
        this.users2 = data.data;
      },
      (error: any) => {
        // this.erro = error;
        console.error('ERROR: ', error);
      })
  }
}
export class DemoModalStaticComponent { }
