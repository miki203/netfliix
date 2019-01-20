import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieTransferService} from '../services/movie-transfer.service';
import {MovieService} from '../services/movie.service';

@Component({
  selector: 'app-videogular',
  templateUrl: './videogular.component.html',
  styleUrls: ['./videogular.component.css']
})
export class VideogularComponent implements OnInit, AfterViewInit {
  private movie: Movie;

  constructor(private movieTransferService: MovieTransferService, private elementRef: ElementRef, private movieService: MovieService) { }

  ngOnInit() {
    this.movieTransferService.currentMovie.subscribe((movie: Movie) => {
      this.movie = movie;
      console.log(movie);
    })
  }

  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'yellow';
  }

  saveToMyList(movie: Movie) {

    this.movieService.saveToMyList(movie).subscribe(data => {

    }, error1 => {
      console.log(error1);
    });

  }

  deleteFromMyList(movie: Movie) {
    this.movieService.deleteFromMyList(movie).subscribe(data => {

    }, error1 => {
      console.log(error1);
    });
  }


}
