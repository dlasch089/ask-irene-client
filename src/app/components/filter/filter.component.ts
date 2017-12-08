import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
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

  filter: Filter;

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
    // let count = 0;
    const values = Object.values(this.filter);
    this.filter[key] = value; // needs to be in the brackets, because it is a string
    for (let ix = 0; ix < values.length; ix++) {
      if (values[ix].length > 0) {
        this.findResult();
      } else {
        this.spotService.getAllSpots()
          .subscribe((result) => {
            this.spots = result;
            this.onChange.emit(this.spots);
          });
      }
    }
  }

  // should emit
  findResult() {
    this.spotService.filterSpots(this.filter)
    .subscribe((result) => {
      this.spots = result;
      this.onChange.emit(this.spots);
      console.log(this.spots);
    });
  }
}
