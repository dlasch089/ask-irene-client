import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Filter } from '../../models/filter';
// include the selector-model

import { SpotService } from '../../services/spot.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  spots = [];
  filter: Filter;
  selectors = null;
  formReady = false;
  result = null;

  constructor(private spotService: SpotService, private selectorService: SelectorService, private router: Router ) { }

  ngOnInit() {
    this.filter = new Filter();
    this.spotService.getAllSpots()
      .subscribe((data) => this.spots = data);

    this.selectorService.load()
      .then((data) => {
        this.formReady = true;
        this.selectors = data;
      });
  }

  handleFilterChange(key, value) {
    this.filter[key] = value; // needs to be in the brackets, because it is a string
  }

  submitForm(form) {
    this.formReady = false;
    this.spotService.filterSpots(this.filter)
      .subscribe((spots) => {
        this.result = spots;
        this.formReady = true;
        this.filter = new Filter();
        console.log(this.result);
      });
  }
}
