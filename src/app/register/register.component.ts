import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {Log} from '@angular/core/testing/src/logger';
import {User} from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loading = false;
  submitted = false;

  private firstName : String;
  private lastName : String;
  private username : String;
  private password : String;
  private email : String;
  private user : User;
  constructor(
    private userService: UserService,
    private router: Router,
  ) {

  }

  ngOnInit() {
  }

  rejestruj() {
    // this.user = new User('imie','last','aaa','aaa','aaa@aaa');
    this.user = new User(this.username,this.password,this.firstName,this.lastName,this.email);
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
    });
  }
}
