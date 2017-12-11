import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class RequireAdminGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.me().then((user) => {
        if (user.role.includes('Admin')) {
          return true;
        } else {
          this.router.navigate(['/spots']);
        }
      });
  }
}
