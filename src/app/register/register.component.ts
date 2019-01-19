import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private firstName : String;
  private lastName : String;
  private username : String;
  private password : String;
  private email : String;
  private user : User;
  constructor(
    private userService: UserService,
  ) {  }

  ngOnInit() {
  }

  rejestruj() {
    this.user = new User(this.username,this.password,this.firstName,this.lastName,this.email);
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
