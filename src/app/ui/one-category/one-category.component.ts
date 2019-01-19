import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Categories} from '../category/categories.enum';
import {Movie} from '../../model/movie';
import {MovieService} from '../../services/movie.service';

@Component({
  selector: 'app-one-category',
  templateUrl: './one-category.component.html',
  styleUrls: ['./one-category.component.css']
})
export class OneCategoryComponent implements OnInit {

  href: String;
  private movies: any = [];

  constructor(private router: Router, private movieService: MovieService) {
  }

  ngOnInit() {
    this.href = this.router.url;

    if (this.href === '/category/sci-fi') {
      this.movieService.getByCategory(Categories[Categories.SCI_FI]).subscribe((data: Movie[]) => {
        this.movies= data;
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

}
