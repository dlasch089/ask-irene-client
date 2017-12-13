import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Spot } from '../../models/spot';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css']
})
export class SpotListComponent implements OnInit {

  @Input() spots: Array<Spot>;

  constructor(router: Router, route: ActivatedRoute,) { }

  ngOnInit() {
  }

}
