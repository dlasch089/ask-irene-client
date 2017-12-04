import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotService {

  baseUrl = 'http://localhost:3000';

  constructor(private http: Http) { }

  getAllSpots() {
    return this.http.get(this.baseUrl + '/spots')
     .map((res: Response) => res.json());
  }

  addSpot(newSpot) {
    console.log(newSpot);
    return this.http.post(this.baseUrl + '/spots', newSpot)
      .map((res: Response) => res.json());
  }
}
