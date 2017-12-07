import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/spots';

import { Spot } from '../models/spot';

@Injectable()
export class FilterService {

  constructor(private http: HttpClient) { }


//   getFilteredSpots(url: string, param: any): Observable<any> {
//     let params: URLSearchParams = new URLSearchParams();
//     for (let key in param) {
//         if (param.hasOwnProperty(key)) {
//             let val = param[key];
//             params.set(key, val);
//         }
//     }
//     this.options = new RequestOptions({ headers: this.headers, search: params });
//     return this.http
//         .get(url, this.options)
//         .map(this.extractData)
//         .catch(this.handleError);
// }

  // spot: Spot;
  // // defining the filter
  // filters: Object = {
  //   district: this.spot.district,
  //   categories: this.spot.categories,
  //   situation: this.spot.situation,
  //   price: this.spot.price,
  //   vibe: this.spot.vibe,
  //   tags: this.spot.tags
  // };

  // getFilteredSpots(filters):Observable<any> {
  //   return this.http.post(`${apiUrl}/?terms=${filters}`, filters);
  // }

}
