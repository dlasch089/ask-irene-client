import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Selectors } from '../models/selector';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/spots';

@Injectable()
export class SelectorService {

  promise: Promise<{}>;
  cache: Selectors;

  constructor(private http: HttpClient) {

    const requestOptions = {
      withCredentials: true
    };
    this.promise = this.http.get(apiUrl + '/selectors', requestOptions)
      .toPromise()
      .then((data: Selectors)  => this.cache = data);
  }

  load(): Promise<Selectors> {
    return this.promise.then(() => this.cache);
  }

}
