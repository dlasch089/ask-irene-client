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
  categories = null;
  options = null;

  constructor() { }



  ngOnInit() {
  }

  submitForm(theForm) {
    console.log('tst', theForm.value)
  }

}
