import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

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

  constructor(private spotService: SpotService, private selectorService: SelectorService) { }

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

}
