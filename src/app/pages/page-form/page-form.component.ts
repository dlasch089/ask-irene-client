import { Component, OnInit } from '@angular/core';

import { Spot } from '../../models/spot';

@Component({
  selector: 'app-page-form',
  templateUrl: './page-form.component.html',
  styleUrls: ['./page-form.component.css']
})
export class PageFormComponent implements OnInit {

  spot: Spot;

  constructor() { }



  ngOnInit() {
  }

}
