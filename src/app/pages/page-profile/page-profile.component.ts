import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

import { User } from '../../models/user';
import { Spot } from '../../models/spot';

@Component({
  selector: 'app-page-profile',
  templateUrl: './page-profile.component.html',
  styleUrls: ['./page-profile.component.css']
})
export class PageProfileComponent implements OnInit {

  user: User;
  favorites: Array<Spot>;
  wishList: Array<Spot>;

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.me().then((user) => {
      if (!user) {
        return true;
      }
      this.user = user;
      this.userService.getUserSpots(this.user)
        .subscribe((data) => {
          this.favorites = data.favorites;
          this.wishList = data.wishList;
        });
    });
  }

}
