import { UserApiService } from './../sevices/user-api.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './../models/user-data.model';

@Component({
  selector: 'app-user-json',
  templateUrl: './user-json.component.html',
  styleUrls: ['./user-json.component.css']
})
export class UserJsonComponent implements OnInit {
  data: any;
  erro: any;
  data2 = [1, 2];

  constructor(private UserApiService: UserApiService) {
    // this.getter();
  }

  ngOnInit() {
  }

  // getter(){
  //   this.UserApiService.getuser().subscribe(
  //     (user: Datas[]) => {
  //     this.data = user;
  //     console.log('O data que recebemos', user);
  //     console.log('A variavel que recebemos', this.data);
  //   },
  //   (error: any) => {
  //     this.erro = error;
  //     console.error('ERROR: ', error);
  //   })
  // }
}
