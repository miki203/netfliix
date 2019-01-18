import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user_name: String;
  private password: String;

  constructor(
    private userService: UserService,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  login() {
    this.userService.getUser(this.user_name, this.password).subscribe(data => {
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data));
      this.router.navigate(['/home']);
    }, error => {
      if (error.status === 403) {
        console.log('złe hasło');
      } else if (error.status === 404) {
        console.log('brak usera w bazie');
      }
    });
  }

}
