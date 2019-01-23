import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../../model/movie';
import {MovieService} from '../../services/movie.service';
import {Categories} from './categories.enum';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {Router} from '@angular/router';
import {NgFlashMessageService} from 'ng-flash-messages';

declare var $ :any;

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

  constructor(
    private router: Router,
    private movieService: MovieService,
    private movieTransferService: MovieTransferService,
    private ngFlashMessageService: NgFlashMessageService
  ) {
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

  changeStateMyList(movie){
    if(movie.inSaved) {
      let src_add = 'assets/img/add.png';
      $(".movieDel"+movie.id).attr("src", src_add);
      this.deleteFromMyList(movie);
      movie.inSaved=false;
    } else {
      let src_add = 'assets/img/delete.png';
      $(".movieAdd"+movie.id).attr("src", src_add);
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
