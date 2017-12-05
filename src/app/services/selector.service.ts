import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';


// make a model for that
class Selectors {
  categories: any;
}

@Injectable()
export class SelectorService {

  baseUrl = 'http://localhost:3000';

  promise: Promise<{}>;
  cache: Selectors;

  constructor(private http: HttpClient) {
    this.promise = this.http.get(this.baseUrl + '/spots/selectors')
      .toPromise()
      .then((data: Selectors)  => this.cache = data);
  }

  load(): Promise<Selectors> {
    return this.promise.then(() => this.cache);
  }


}
