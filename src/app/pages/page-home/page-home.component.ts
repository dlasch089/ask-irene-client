import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SpotService} from '../../services/spot.service';
import { Spot } from '../../models/spot';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  randomSpot: any;

  constructor(private spotService: SpotService, private router: Router) { }

  ngOnInit() {
  }

  handleRandom() {
    this.spotService.getRandomSpot()
      .subscribe((data) => {
        this.randomSpot = data;
        this.router.navigate([`/spots/${this.randomSpot._id}`])
    });
  }

}
