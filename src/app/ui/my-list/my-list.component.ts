import { Component, OnInit } from '@angular/core';
import {Movie} from '../../model/movie';
import {Router} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {MovieTransferService} from '../../services/movie-transfer.service';
import {NgFlashMessageService} from 'ng-flash-messages';

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  private movies: any = [];

  constructor(private router: Router, private movieService: MovieService,
              private movieTransferService: MovieTransferService,
              private ngFlashMessageService: NgFlashMessageService) {

  }

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

  deleteFromMyList(movie: Movie) {
    this.router.navigateByUrl('my_user');
    this.movieService.deleteFromMyList(movie).subscribe(data => {
      console.log(data);

      this.router.navigateByUrl('my_list');

      this.ngFlashMessageService.showFlashMessage({
        messages: ['Podany użytkownik nie istnieje'],
        dismissible: false,
        timeout: false,
        type: 'danger'
      });

    }, error1 => {
      console.log(error1);
    });


  }
}
