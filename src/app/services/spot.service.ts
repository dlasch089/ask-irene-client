import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/spots';

import { Spot } from '../models/spot';

@Injectable()
export class SpotService {

  constructor(private http: HttpClient) { }

  getAllSpots(): Observable<any> {
    const requestOptions = {
      withCredentials: true
    };
    return this.http.get(apiUrl + '/', requestOptions);
  }

  getSpotDetail(spotId): Observable<any> {
    const requestOptions = {
      withCredentials: true
    };
    return this.http.get(apiUrl + `/${spotId}`, requestOptions);
  }

  addSpot(newSpot) {
    const requestOptions = {
      withCredentials: true
    };
    console.log(newSpot);
    return this.http.post(apiUrl + '/', newSpot, requestOptions);
  }

  deleteSpot(spotId) {
    const requestOptions = {
      withCredentials: true,
      spotId: spotId
    };
    console.log(spotId);
    return this.http.post(apiUrl + `/${spotId}`, requestOptions);
  }

  filterSpots(newFilter) {
    return this.http.post(apiUrl + '/filter', newFilter);
  }

  getRandom() {
    return this.http.get(apiUrl + '/random');
  }
}

