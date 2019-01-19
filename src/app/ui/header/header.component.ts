import {Component, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {$} from 'protractor';
import {MatMenuTrigger} from '@angular/material';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';
import {MovieService} from '../../services/movie.service';
import {Movie} from '../../model/movie';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public scroll;

  constructor(private router: Router, private renderer: Renderer2, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private movieService: MovieService, private movieTransferService: MovieTransferService) {
    iconRegistry.addSvgIcon(
      'menu',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/menu.svg'));
    iconRegistry.addSvgIcon(
      'logout',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/logout.svg'));
  }


  ngOnInit() {
    this.renderer.listen(window, 'scroll', () => {
      this.scroll = (window.scrollY);
    });
  }

  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string){
    this._searchTerm = value
  }

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  someMethod() {
    this.trigger.openMenu();
  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  search() {
    this.movieService.getMovie('example_video').subscribe(data => {
      let movie = new Movie(
        data.category,
        data.description,
        data.movieUrl,
        data.thumbnailUrl,
        data.timestamp,
        data.title,
      );
      this.ogladaj(movie);

    });
  }

  ogladaj(movie: Movie) {
    this.movieTransferService.setMovie(movie);
    this.router.navigate(['videogular']);
  }
}
