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
    this.spot.images = [];
    this.spotService.getAllSpots()
      .subscribe((data) => this.spots = data);

    this.selectorService.load()
      .then((data) => {
        this.formReady = true;
        this.selectors = data;
      });

  }

  handleCategoryChange(value, selector) {
    switch (selector) {
      case 'district':
      this.spot.district = value;
      break;
      case 'situation':
      this.spot.situation = value;
      break;
      case 'price':
      this.spot.price = value;
      break;
      case 'vibe':
      this.spot.vibe = value;
      break;
      case 'categories':
      this.spot.categories = value;
      break;
      case 'tags':
      this.spot.tags = value;
      break;
      default:
      console.log('error');
    }
    // console.log(this.spot);
    // this.spot.categories = value;
    // console.log('Categories: '+ this.spot.categories, 'District:' + this.spot.district);
  }

  handleAddImage(value) {
    event.preventDefault();
    this.spot.images.push(value);
  }

  handleLocationSelect(informationArray) {
    this.spot.name = informationArray[0];
    this.spot.location = {
      type: 'Point',
      coordinates: [informationArray[1].lat(), informationArray[1].lat()]
    };
  }

  submitForm() {
    this.spotService.addSpot(this.spot);
  }
}
