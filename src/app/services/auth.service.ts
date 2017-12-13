import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';

import { User } from '../models/user';

const apiUrl = environment.apiUrl + '/auth';

@Injectable()
export class AuthService {

  private loaded = false;
  private user: User;
  private userChange: Subject<User | null> = new Subject();

  // Observable string stream
  userChange$ = this.userChange.asObservable();

  constructor(private http: HttpClient) { }

  public setUser(user: User = null) {
    this.loaded = true;
    this.user = user;
    this.userChange.next(user);
  }

  signup(user: User) {
    const requestOptions = {
      withCredentials: true,
    };
    return this.http.post(apiUrl + '/signup', user, requestOptions)
      .map(res => {
        this.setUser(new User(res));
        return user;
      });
  }

  login(user: User) {
    const requestOptions = {
      withCredentials: true,
    };
    return this.http.post(apiUrl + '/login', user, requestOptions)
      .map(res => {
        this.setUser(new User(res));
        return user;
      });
  }

  logout() {
    const requestOptions = {
      withCredentials: true,
    };
    return this.http.post(apiUrl + '/logout', {}, requestOptions)
    .map(res => {
      this.setUser();
      return null;
    });
  }

  me() {
    const requestOptions = {
      withCredentials: true,
    };
    return this.http.get(apiUrl + '/me', requestOptions)
      .toPromise()
      .then(res => {
        const user = new User(res);
        this.setUser(user);
        return user;
      })
      .catch((err) => {
        if (err.status === 404) {
          this.setUser();
        }
      });
  }

  getUser() {
    return this.user;
  }
}
