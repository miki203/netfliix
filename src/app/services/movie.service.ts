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
    console.log(userJson);

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

  getByCategory(category) {
    let params = new HttpParams()
      .append('category', category);
    return this.http.get(UrlConstants.URL_MOVIES_GET_CATEGORY, {params: params});
  }

  addMovie(movie: AddMovie): Observable<any> {
    let body = JSON.stringify(movie);
    console.log(body);
    return this.http.post(UrlConstants.URL_MOVIES_ADD_MOVIE, body, {headers: this.headers});
  }
}
