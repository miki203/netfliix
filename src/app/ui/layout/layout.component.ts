import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ngControlStatusHost} from '@angular/forms/src/directives/ng_control_status';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  userJson = localStorage.getItem('currentUser');

  constructor(userService: UserService) { }

  ngOnInit() {
  }
}

