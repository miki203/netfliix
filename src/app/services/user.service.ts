import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
  }

  getUser(user_name, user_password) {
    return this.http.get('http://localhost:8106/users/' + user_name + '/' + user_password);
  }

  createUser(user: User): Observable<any> {
    let body = JSON.stringify(user);
    console.log(body);
    return this.http.post('http://localhost:8106/users/create', body, {headers: this.headers});
  }
}
