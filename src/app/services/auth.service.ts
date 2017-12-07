import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl + '/auth';

import { User } from '../models/user';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

}
