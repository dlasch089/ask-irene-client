import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Spot } from '../models/spot';

@Injectable()
export class SpotService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getAllSpots(): Observable<any> {
    return this.http.get(this.baseUrl + '/spots');
  }

  addSpot(newSpot) {
    console.log(newSpot.value);
    return this.http.post(this.baseUrl + '/spots', newSpot.value)
      .subscribe();
  }
}
