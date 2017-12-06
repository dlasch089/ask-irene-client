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

  addSpot(newSpot) {
    console.log(newSpot);
    return this.http.post(apiUrl + '/', newSpot);
  }
}

