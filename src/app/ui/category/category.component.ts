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

  constructor(private router: Router, private movieService: MovieService, private movieTransferService: MovieTransferService) {
    this.getByCategory();
  }

  ngOnInit() {
    this.movieService.getMovie('example_video').subscribe(data => {
      let movie = new Movie(
        data.id,
        data.category,
        data.description,
        data.movieUrl,
        data.thumbnailUrl,
        data.timestamp,
        data.title,
      );
    });
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
    this.router.navigate(['videogular']);
    console.log("dziala ? ")
  }

}
