import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {Movie} from '../../model/movie';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User= new User();

  constructor() {

    let userJson = localStorage.getItem('currentUser');
    console.log(userJson);


    JSON.parse(userJson, (key, value) => {
      if (key === 'id') {
        this.user.id = value;
      }
      if (key === 'firstName') {
        this.user.firstName = value;
      }
      if (key === 'lastName') {
        this.user.lastName = value;
      }
      if (key === 'password') {
        this.user.password = value;
      }
      if (key === 'username') {
        this.user.username = value;
      }
      if (key === 'email') {
        this.user.email = value;
      }
    });
  }

  ngOnInit() {
    // this.user=localStorage.getItem('currentUser');
  }

}
