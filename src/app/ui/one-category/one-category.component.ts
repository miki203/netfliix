import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../category/categories.enum';
import {Movie} from '../../model/movie';
import {MovieService} from '../../services/movie.service';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})
export class OneCategoryComponent implements OnInit {

  href: String;
  private movies: any = [];

  constructor(
    private router: Router,
    private movieService: MovieService,
    private movieTransferService: MovieTransferService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
  }

  ngOnInit() {
    this.href = this.router.url;

    if (this.href === '/category/sci-fi') {
      this.movieService.getByCategory(Categories[Categories.SCI_FI]).subscribe((data: Movie[]) => {
        this.movies= data;
        console.log(data);
      });
    }
    if (this.href === '/category/comedy') {
      this.movieService.getByCategory(Categories[Categories.COMEDY]).subscribe((data: Movie[]) => {
        this.movies= data;
      });
    }
    if (this.href === '/category/horror') {
      this.movieService.getByCategory(Categories[Categories.HORROR]).subscribe((data: Movie[]) => {
        this.movies= data;
      });
    }
    if (this.href === '/category/thriller') {
      this.movieService.getByCategory(Categories[Categories.THRILLER]).subscribe((data: Movie[]) => {
        this.movies= data;
      });
    }

  }

  ogladaj(movie: Movie) {
    this.movieTransferService.setMovie(movie);
    this.router.navigate(['videogular']);
  }

  saveToMyList(movie: Movie) {

    this.movieService.saveToMyList(movie).subscribe(data => {
      console.log(this.router.url);
      window.location.reload();
    }, error1 => {
      this.ngFlashMessageService.showFlashMessage({
        messages: [error1],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });
    });

  }

  deleteFromMyList(movie: Movie) {
    this.movieService.deleteFromMyList(movie).subscribe(data => {
      console.log(data);
      window.location.reload();
    }, error1 => {
      this.ngFlashMessageService.showFlashMessage({
        messages: [error1],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });
    });
  }

}
