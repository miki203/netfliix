import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieTransferService} from '../services/movie-transfer.service';

@Component({
  selector: 'app-videogular',
  templateUrl: './videogular.component.html',
  styleUrls: ['./videogular.component.css']
})
export class VideogularComponent implements OnInit {
  private movie: Movie;


  constructor(private movieTransferService: MovieTransferService) { }

  ngOnInit() {
    this.movieTransferService.currentMovie.subscribe((movie: Movie) => {
      this.movie = movie;
      console.log(movie);
    })
  }

}
