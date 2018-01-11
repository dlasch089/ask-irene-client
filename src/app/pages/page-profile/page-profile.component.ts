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
  favorites: Array<Spot> = null;
  wishList: Array<Spot> = null;
  message: Array<string> = [
    'Add places to your wishlist/favorites to show them here! Or just go to '
  ];


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
      this.updateLists(this.user);
    });
  }

  updateLists(user) {
    this.userService.getUserSpots(this.user)
    .subscribe((data) => {
      this.favorites = data.favorites;
      this.wishList = data.wishList;
    });
  }

  handleDelete(listType, spotId) {
    if (listType === 'favorites') {
      console.log('delete from favs!');
      this.userService.updateFavs(spotId, this.user)
      .subscribe((message) => {
        console.log(message);
        this.updateLists(this.user);
      });
    } else {
      console.log('delete from wishList!');
      this.userService.updateWishList(spotId, this.user)
      .subscribe((message) => {
        console.log(message);
        this.updateLists(this.user);
      });
    }

  }

}
