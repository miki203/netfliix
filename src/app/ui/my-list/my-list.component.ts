import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie';
import {Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {MovieTransferService} from '../../services/movie-transfer.service';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  private movies: any = [];

  constructor(private router: Router, private movieService: MovieService, private movieTransferService: MovieTransferService) { }

  ngOnInit() {
    this.getMyList()
  }

  ogladaj(movie: Movie) {
    this.movieTransferService.setMovie(movie);
    this.router.navigate(['videogular']);
  }

  getMyList() {
    this.movieService.getMyList().subscribe((data: Movie[]) => {
      this.movies= data;
    });
  }
}
