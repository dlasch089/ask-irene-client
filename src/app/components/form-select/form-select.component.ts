import { Component, OnInit } from '@angular/core';

import { Selectables } from '../../models/select';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  categories = Selectables[0];


  constructor() { }

  ngOnInit() {
  }

  handleCategoryChange(value) {
    this.categories = value;
  }

}
