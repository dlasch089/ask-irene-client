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

  handleSelectorChange(key, value) {
    this.spot[key] = value;
  }

  handleAddImage(value) {
    event.preventDefault();
    this.spot.images.push(value);
  }

  handleLocationSelect(informationArray) {
    this.spot.name = informationArray[0];
    this.spot.location = {
      type: 'Point',
      coordinates: [informationArray[1].lat(), informationArray[1].lng()]
    };
    this.spot.links.googleMaps = informationArray[2];
  }

  submitForm(form) {
    this.formReady = false;
    // form.reset();
    this.spotService.addSpot(this.spot)
      .subscribe(() => {
        this.formReady = true;
        this.spot = new Spot();
      });
  }
}
