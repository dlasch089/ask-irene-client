import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { Spot } from '../../models/spot';

@Component({
  selector: 'app-spot-list',
  templateUrl: './spot-list.component.html',
  styleUrls: ['./spot-list.component.css']
})
export class SpotListComponent implements OnInit {

  @Input() spots: Array<Spot>;
  @Input() hideButton: Boolean = false;
  @Input() message: String;
  @Output() onDelete = new EventEmitter<String>();

  constructor(router: Router, route: ActivatedRoute,) { }

  ngOnInit() {
  }

  handleDelete(spotId) {
    this.onDelete.emit(spotId);
  }

}
