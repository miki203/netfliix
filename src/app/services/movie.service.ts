import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {Movie} from '../model/movie';
import {Observable} from 'rxjs';
import {UserService} from './user.service';
import {UrlConstants} from '../url-constants';
import {AddMovie} from '../model/add-movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  readonly headers: HttpHeaders;
  private userId;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-type': 'application/json'
    });
    let userJson = localStorage.getItem('currentUser');

    JSON.parse(userJson, (key, value) => {
      if(key === 'id') {
        this.userId = value;
      }
    });
  }

  getMovie(movieTitle): Observable<any> {
    let params = new HttpParams()
      .append('title', movieTitle)
      .append('userId', this.userId);
    return this.http.get(UrlConstants.URL_MOVIES_GET_MOVIE, {params: params});
  }

  getMovies() {
    let params = new HttpParams()
      .append('userId', this.userId);
    return this.http.get(UrlConstants.URL_MOVIES, {params: params});
  }

  getByCategory(category) {
    let params = new HttpParams()
      .append('category', category)
      .append('userId', this.userId);
    return this.http.get(UrlConstants.URL_MOVIES_GET_CATEGORY, {params: params});
  }

  addMovie(movie: AddMovie): Observable<any> {
    let body = JSON.stringify(movie);
    return this.http.post(UrlConstants.URL_MOVIES_ADD_MOVIE, body, {headers: this.headers});
  }

  saveToMyList(movie: Movie): Observable<any> {
    let params = new HttpParams()
      .append('movieId', movie.id.toString())
      .append('userId', this.userId);

    let body = JSON.stringify(movie);
    return this.http.post(UrlConstants.URL_MOVIES_ADD_TO_MY_LIST, body, {params: params});
  }

  deleteFromMyList(movie: Movie): Observable<any> {
    let params = new HttpParams()
      .append('movieId', movie.id.toString())
      .append('userId', this.userId);
    console.log(params);
    return this.http.delete(UrlConstants.URL_MOVIES_MY_LIST+'/'+movie.id.toString()+'/'+this.userId);
  }

  getMyList() {
    let params = new HttpParams()
      .append('userId', this.userId);
    return this.http.get(UrlConstants.URL_MOVIES_MY_LIST, {params: params});
  }
}
