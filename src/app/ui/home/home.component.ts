import {Component, OnInit} from '@angular/core';

import {ModalService} from '../../_services/ModalService';
import {Movie} from '../../model/movie';
import {MovieService} from '../../services/movie.service';
import {Categories} from '../category/categories.enum';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private randomMovie: Movie;

  constructor(private modalService: ModalService, private movieService: MovieService,
              private movieTransferService: MovieTransferService, private router: Router) {
  }

  ngOnInit() {
    this.movieService.getMovies().subscribe((data: Movie[]) => {
      this.randomMovie = data[Math.floor(Math.random() * data.length)];
    });
  }

  saveToMyList(movie: Movie) {
    this.movieService.saveToMyList(movie).subscribe(data => {
      console.log(data);
    }, error1 => {
      console.log(error1);
    });
  }

  ogladaj(movie: Movie) {
    this.movieTransferService.setMovie(movie);
    this.router.navigate(['videogular']);
  }
}
