import {AfterViewInit, Component, ElementRef, Input, OnInit} from '@angular/core';
import {Movie} from '../model/movie';
import {MovieTransferService} from '../services/movie-transfer.service';
import {MovieService} from '../services/movie.service';
import {NgFlashMessageService} from 'ng-flash-messages';

declare var $ :any;

@Component({
  selector: 'app-videogular',
  templateUrl: './videogular.component.html',
  styleUrls: ['./videogular.component.css']
})
export class VideogularComponent implements OnInit, AfterViewInit {
  private movie: Movie;

  constructor(
    private movieTransferService: MovieTransferService,
    private elementRef: ElementRef,
    private movieService: MovieService,
    private ngFlashMessageService: NgFlashMessageService
  ) { }

  ngOnInit() {
    this.movieTransferService.currentMovie.subscribe((movie: Movie) => {
      this.movie = movie;
      console.log(movie);
    })
  }

  ngAfterViewInit(): void {
    // this.elementRef.nativeElement.ownerDocument.body.style.backgroundImage = 'yellow';
  }

  changeStateMyList(movie){
    if(movie.inSaved) {
      let src_add = 'assets/img/add.png';
      $("#movieDel"+movie.id).attr("src", src_add);
      this.deleteFromMyList(movie);
      movie.inSaved=false;
    } else {
      let src_add = 'assets/img/delete.png';
      $("#movieAdd"+movie.id).attr("src", src_add);
      this.saveToMyList(movie);
      movie.inSaved=true;
    }
  }

  saveToMyList(movie: Movie) {
    this.movieService.saveToMyList(movie).subscribe(data => {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Film dodany do "Moja lista"'],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });
    }, error1 => {
      this.ngFlashMessageService.showFlashMessage({
        messages: [error1],
        dismissible: true,
        timeout: 2000,
        type: 'error'
      });
    });

  }

  deleteFromMyList(movie: Movie) {
    this.movieService.deleteFromMyList(movie).subscribe(data => {
      this.ngFlashMessageService.showFlashMessage({
        messages: ['Film usunięty z "Moja lista"'],
        dismissible: true,
        timeout: 2000,
        type: 'success'
      });
    }, error1 => {
      this.ngFlashMessageService.showFlashMessage({
        messages: [error1],
        dismissible: true,
        timeout: 2000,
        type: 'error'
      });
    });
  }


}
