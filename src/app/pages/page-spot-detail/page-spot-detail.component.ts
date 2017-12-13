import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { SpotService } from '../../services/spot.service';
import { AuthService } from '../../services/auth.service';

import { UserService } from '../../services/user.service';

import { Spot } from '../../models/spot';
import { User } from '../../models/user';

@Component({
  selector: 'app-page-spot-detail',
  templateUrl: './page-spot-detail.component.html',
  styleUrls: ['./page-spot-detail.component.css']
})
export class PageSpotDetailComponent implements OnInit {

  spot: Spot = null;

  user: User;

  addedtoFavorites: Boolean = false;

  constructor(private spotService: SpotService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.spotService.getSpotDetail(params.spotId)
        .subscribe((data) => this.spot = data);
    });

    this.authService.me().then((user) => {
      if (!user) {
        return true;
      }
      this.user = user;
    });
  }

  onFavEdit() {
    this.userService.updateFavs(this.spot._id, this.user)
      .subscribe((message) => {
        console.log(message);
      });
  }

  onSaveEdit() {
    this.userService.updateWishList(this.spot._id, this.user)
    .subscribe((message) => {
      console.log(message);
    });
  }

}
