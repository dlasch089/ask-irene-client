import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css']
})
export class SpotListComponent implements OnInit {

  @Input() spots: Object;

  constructor(router: Router, route: ActivatedRoute,) { }

  ngOnInit() {
  }

}
