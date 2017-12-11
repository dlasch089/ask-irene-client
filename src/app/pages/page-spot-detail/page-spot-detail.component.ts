import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { SpotService } from '../../services/spot.service';

import { Spot } from '../../models/spot';

@Component({
  selector: 'app-page-spot-detail',
  templateUrl: './page-spot-detail.component.html',
  styleUrls: ['./page-spot-detail.component.css']
})
export class PageSpotDetailComponent implements OnInit {

  spot: Spot = null;

  constructor(private spotService: SpotService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.spotService.getSpotDetail(params.spotId)
        .subscribe((data) => this.spot = data);
    });
  }

}
