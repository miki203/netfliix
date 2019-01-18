import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Movie} from '../model/movie';

@Injectable()
export class MovieTransferService {

  private movieSource = new BehaviorSubject(new Movie());
  currentMovie = this.movieSource.asObservable();

  constructor() {}

  setMovie(movie: Movie) {
    this.movieSource.next(movie);
  }
}
