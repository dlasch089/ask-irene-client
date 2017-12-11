import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';

import { User } from '../models/user';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/user';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }


  updateFavs(spotId, user) {
    const requestOptions = {
      withCredentials: true,
      spotId: spotId,
      user: user
    };
    return this.http.post(apiUrl + `/me/favourites`, requestOptions);
  }

  updateWishList(spotId, user) {
    const requestOptions = {
      withCredentials: true,
      spotId: spotId,
      user: user
    };
    return this.http.post(apiUrl + `/me/wishlist`, requestOptions);
  }
}
