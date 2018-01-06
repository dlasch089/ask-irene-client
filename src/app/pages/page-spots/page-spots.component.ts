import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

import { MatTabGroup } from '@angular/material';
import { MatTab } from '@angular/material';

import { AuthService } from '../../services/auth.service';

import { SpotService } from '../../services/spot.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'app-page-spots',
  templateUrl: './page-spots.component.html',
  styleUrls: ['./page-spots.component.css']
})
export class PageSpotsComponent implements OnInit {

  spots = null;
  filterReady = false;
  selectors = null;
  mapActive = false;
  message: Array<string> = [
    'Wow! You’re such a hipster that no places like this exist yet! But you know which spot is truly worth trying? ',
    'Sorry! There are no places like the one you’re looking for in my database 💔 But have you tried ',
    'Looking for something really specific, aren’t you? Try removing a few filters or jsut go to ',
    'We couldn’t find the place you’re looking for but here’s another spot that can take care of your hunger: ',
    'Turns out what you’re looking for is not here — yet 🔮 But did I tell you about '
];

  resultVisible = false;
  filterVisible = true;

  constructor(
    private spotService: SpotService,
    private selectorService: SelectorService,
    private authService: AuthService
  ) { }

  ngOnInit() {


  this.spotService.getAllSpots()
    .subscribe((data) => this.spots = data);

  this.selectorService.load()
    .then((data) => {
      this.filterReady = true;
      this.selectors = data;
    });
  }

  handleFilterChange(result) {
    this.spots = result;
  }

  showResults(event) {
    if (this.resultVisible) {
      this.resultVisible = false;
      // this.filterVisible = true;
      event.srcElement.innerHTML = `Show results `;
    } else {
      this.resultVisible = true;
      // this.filterVisible = false;
      event.srcElement.innerHTML = 'Edit filters 🤔';
    }
  }

  activateMap() {
    this.mapActive = true;
    // console.log(this.mapActive);
  }
}
