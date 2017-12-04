import { Component, OnInit } from '@angular/core';

import { Spot } from '../../models/spot';
import { Selectables } from '../../models/select';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  spot: Spot;
  categories = [
    'Cocktails',
    'American',
    'Asian Fusion',
    'Avant-garde Cuisine',
    'Bar',
    'Brasa',
    'Breakfast & brunch',
    'Burger & sandwich',
    'Café',
    'Cake & pastry',
    'Caribbean',
    'Chinese',
    'Craft beer',
    'French',
    'Healthy',
    'Ice cream',
    'Italian',
    'Japanese',
    'Korean',
    'Mexican',
    'Peruvian',
    'Pizza',
    'Ramen',
    'Seafood',
    'South American',
    'Speciality Coffee',
    'Sushi',
    'Tapas',
    'Thai',
    'Vermut',
    'Vietnamese',
    'Wine'];
  processing = false;
  feedbackEnabled = false;

  constructor() { }

  ngOnInit() {
    this.spot = new Spot();
    this.spot.categories = [];
  }

  handleCategoryChange(category) {
    this.spot.categories.push(category);
    console.log(this.spot);
  }

  submitForm(theForm) {
    console.log(theForm);
  }

}
