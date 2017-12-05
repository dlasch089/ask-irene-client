import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';

import { Spot } from '../../models/spot';
// include the selector-model

import { SpotService } from '../../services/spot.service';
import { SelectorService } from '../../services/selector.service';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  spots = [];
  spot: Spot;
  selectors = null;
  processing = false;
  feedbackEnabled = false;
  formReady = false;

  constructor(
    private spotService: SpotService,
    private selectorService: SelectorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.spot = new Spot();
    this.spotService.getAllSpots()
      .subscribe((data) => this.spots = data);

    this.selectorService.load()
      .then((data) => {
        this.formReady = true;
        this.selectors = data;
      });

  }

  handleCategoryChange(value) {
    this.spot.categories = value;
    this.spot.district = value;
    console.log('Categories: '+ this.spot.categories, 'District:' + this.spot.district);
  }

  // handleDistrictChange(value) {

  //   console.log(value);
  // }

  submitForm() {
    this.spotService.addSpot(this.spot);
  }

}
