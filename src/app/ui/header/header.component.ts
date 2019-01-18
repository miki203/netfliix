import {Component, HostListener, OnInit, Renderer2} from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selected = false;

  public sections = 2;

  public scroll;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.listen(window, 'scroll', () => {
      this.scroll = (window.scrollY);
    });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
