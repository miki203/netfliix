import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User = new User();
  newPassword: string;

  constructor(private userService: UserService,
              private ngFlashMessageService: NgFlashMessageService
  ) {

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

  changePassword(newPassword: string) {
    this.userService.changePassword(newPassword).subscribe(data => {
      localStorage.removeItem('currentUser');
      window.location.reload();
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Hasło zmienione'],
        dismissible: false,
        timeout: false,
        type: 'success'
      });
    }, error1 => {
      if (error1.status === 404) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Not Found'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      } else if (error1.status === 403) {
        this.ngFlashMessageService.showFlashMessage({
          messages: ['Wrong password'],
          dismissible: false,
          timeout: false,
          type: 'danger'
        });
      }
    });
  }
}
