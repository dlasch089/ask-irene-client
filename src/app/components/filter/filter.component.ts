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
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {


  filter: Filter;
  // allFlags: Object;

  feedbackEnabled = false;
  processing = false;

  filterType = ['categories', 'district', 'situation', 'price', 'vibe', 'tags'];

  @Input() spots: Object;
  @Input() selectors = null;

  @Output() onChange = new EventEmitter<Object>();

  constructor(
    private spotService: SpotService,
    private selectorService: SelectorService,
    private router: Router,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.filter = this.filterService.filter;
    // this.flags = this.filterService.flags;
  }

  handleFilterChange(key, value) {
    this.filter[key] = value; // needs to be in the brackets, because it is a string
    this.filterService.filter = this.filter;
    this.findResult();
  }

  // (onCheck)="handleCheckChange($event)" --> From the HTML - on all filter-select components
  // handleCheckChange(checkItemStatus) {
  //   this.flags.push(checkItemStatus);
  //   this.filterService.flags = this.flags;
  //   console.log(this.flags);
  // }

  // should emit
  findResult() {
    this.spotService.filterSpots(this.filter)
    .subscribe((result) => {
      this.spots = result;
      this.onChange.emit(this.spots);
    });
  }

  // clearFilter() {
  //   this.allFlags = this.filterService.addCheckedValue();
  //   // this.filter = this.filterService.newFilter();
  //   // for (let ix = 0; ix < this.flags.length; ix++) {
  //   //   this.flags[ix].checked = false;
  //   // }
  //   // this.flags = [];
  //   // this.filterService.flags = this.flags;
  //   // console.log(this.flags);
  //   // this.spotService.getAllSpots()
  //   //   .subscribe((data) => {
  //   //     this.spots = data;
  //   //     this.onChange.emit(this.spots);
  //   //   });
  // }
}
