import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class SelectorService {

  baseUrl = 'http://localhost:3000';

  // selectors: Object[];
  // categories: String[];
  // tags: String[];
  // price: String[];
  // district: String[];
  // situation: String[];



  constructor(private http: HttpClient) { }

  getCategories(categories) {
    return this.http.get(this.baseUrl + 'spots/selectors', categories)
  }

  getTags(tags) {
    return this.http.get(this.baseUrl + 'spots/selectors', tags)
  }
  getPrice(price) {
    return this.http.get(this.baseUrl + 'spots/selectors', price)
  }


}
