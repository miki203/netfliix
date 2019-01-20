import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../model/user';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private firstName: String;
  private lastName: String;
  private username: String;
  private password: String;
  private email: String;
  private user: User;

  constructor(
    private userService: UserService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
  }

  ngOnInit() {
  }

  rejestruj() {
    this.user = new User(this.username, this.password, this.firstName, this.lastName, this.email);
    this.userService.createUser(this.user).subscribe(data => {
      console.log(data);
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Użytkownik utworzony'],
        dismissible: false,
        timeout: false,
        type: 'success'
      });
    }, error1 => {
      if (error1.status === 401) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Unauthorized'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 403) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Forbidden'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 404) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['User already exist'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 400) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Uzupełnij wszystkie dane'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      }
    });
  }
}
