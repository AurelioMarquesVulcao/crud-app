import { Component, OnInit } from '@angular/core';
import { UserApiService } from './../../sevices/user-api.service';
import { Usernamejob } from 'src/app/models/user-data.model';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  user: Usernamejob = new Usernamejob(); //insert any for any problem

  constructor(private UserApiService: UserApiService) { }

  ngOnInit() {
  }
  add() {
    console.log(this.user);
    this.UserApiService.postuser(this.user).subscribe(
      user => {
        console.log(user);
        this.user = new Usernamejob();
      },
      (error: any) => {
        console.error('ERROR: ', error);
      });
  }
  update(id: number) {
    console.log(this.user);
    this.UserApiService.putuser(id, this.user).subscribe(
      user => {
        console.log(user);
        this.user = new Usernamejob();
      },
      (error: any) => {
        console.error('ERROR: ', error);
      });
  }
  delete(id: number) {
    console.log(this.user);
    this.UserApiService.deleteuser(id).subscribe(
      user => {
        console.log(user);
        this.user = new Usernamejob();
      },
      (error: any) => {
        console.error('ERROR: ', error);
      });
  }
}
