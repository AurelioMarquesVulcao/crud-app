import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Data } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }
    public getuser(): Observable<any>{
      return this.http.get("https://reqres.in/api/users?page=1");
  }
  public getuser2(): Observable<any>{
    return this.http.get("https://reqres.in/api/users?page=2");
}
}
