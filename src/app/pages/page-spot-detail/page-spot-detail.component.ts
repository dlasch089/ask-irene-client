import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { SpotService } from '../../services/spot.service';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService
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

  onFavAdd() {
    this.authService.updateFavs(this.spot._id)
      .subscribe((message) => {
        this.addedtoFavorites = message.message;
        console.log(this.user.favorites);
      });
  }

  onSaveAdd() {
    console.log('Add to save: ' + this.spot._id);
  }

}
