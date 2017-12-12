import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatTabGroup } from '@angular/material';
import { MatTab } from '@angular/material';
import 'rxjs/add/operator/map';

import { Filter } from '../../models/filter';
// include the selector-model
import { Flag } from '../../models/flags';

import { SpotService } from '../../services/spot.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  filter: Filter;
  flags: Array<Flag> = [];

  feedbackEnabled = false;
  processing = false;

  @Input() spots: Object;
  @Input() selectors = null;

  @Output() onChange = new EventEmitter<Object>();

  constructor(private spotService: SpotService, private selectorService: SelectorService, private router: Router ) { }

  ngOnInit() {
    this.filter = new Filter();
  }

  // should emit
  handleFilterChange(key, value) {
    this.filter[key] = value; // needs to be in the brackets, because it is a string
        this.findResult();
  }

  handleCheckChange(checkItemStatus) {
    this.flags.push(checkItemStatus);
    console.log(this.flags);
  }

  // should emit
  findResult() {
    this.spotService.filterSpots(this.filter)
    .subscribe((result) => {
      this.spots = result;
      this.onChange.emit(this.spots);
    });
  }

  clearFilter() {
    this.filter = new Filter();
    for (let ix = 0; ix < this.flags.length; ix++) {
      this.flags[ix].checked = false;
    }
    this.flags = [];
    console.log(this.flags);
    this.spotService.getAllSpots()
      .subscribe((data) => {
        this.spots = data;
        this.onChange.emit(this.spots);
      });
  }
}
