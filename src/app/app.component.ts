import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ask Irene';

  loading = true;
  anon: boolean;
  admin: true;
  user: User;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.me().then((user) => {
      if (!user) {
        return true;
      }
    });

    this.authService.userChange$.subscribe((user) => {
      this.loading = false;
      this.user = user;
      this.anon = !user;
      if (user) {
        if (this.user.role.includes('Admin')) {
          this.admin = true;
        }
      }
    });
  }

  login() {
    this.router.navigate(['/auth/login']);
  }

  signup() {
    this.router.navigate(['/auth/signup']);
  }

  profile() {
    this.router.navigate(['/auth/me']);
  }

  logout() {
    this.authService.logout()
      .subscribe(() => this.router.navigate(['/']));
  }

  goToForm() {
    this.router.navigate(['/form']);
  }

  goToList() {
    this.router.navigate(['/list-all']);
  }
}
