import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.css']
})
export class AuthSignupComponent implements OnInit {

  user = new User({
    username: '',
    email: '',
    password: '',
    role: ['User'],
    favorites: [],
    wishlist: []
  });

  error: String;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signup() {
    this.error = null;
    this.authService.signup(this.user).subscribe(
      () => this.router.navigate(['/spots']),
      (err) => this.error = err
    );
  }
}
