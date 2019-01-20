import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../model/movie';
import {MovieService} from '../../services/movie.service';
import {Categories} from './categories.enum';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  private moviesComedy: any = [];
  private moviesHorrors: any = [];
  private moviesSciFi: any = [];
  private moviesThriller: any = [];
  img: string;

  constructor(private router: Router, private movieService: MovieService, private movieTransferService: MovieTransferService) {
    this.getByCategory();

  }

  ngOnInit() {

  }

  getByCategory() {
    this.movieService.getByCategory(Categories[Categories.COMEDY]).subscribe((data: Movie[]) => {
      this.moviesComedy = data;
    });
    this.movieService.getByCategory(Categories[Categories.THRILLER]).subscribe((data: Movie[]) => {
      this.moviesThriller = data;
    });

    this.movieService.getByCategory(Categories[Categories.SCI_FI]).subscribe((data: Movie[]) => {
      this.moviesSciFi = data;
    });
    this.movieService.getByCategory(Categories[Categories.HORROR]).subscribe((data: Movie[]) => {
      this.moviesHorrors = data;
    });
  }

  ogladaj(movie: Movie) {
    this.movieTransferService.setMovie(movie);
    console.log(movie);
    this.router.navigate(['videogular']);
  }

  saveToMyList(movie: Movie) {
    this.router.navigateByUrl('my_list');
    this.movieService.saveToMyList(movie).subscribe(data => {
      this.router.navigateByUrl('category');
    }, error1 => {
      console.log(error1);
    });
  }

  deleteFromMyList(movie: Movie) {
    this.router.navigateByUrl('my_list');
    this.movieService.deleteFromMyList(movie).subscribe(data => {
      this.router.navigateByUrl('category');
    }, error1 => {
      console.log(error1);
    });
  }
}
