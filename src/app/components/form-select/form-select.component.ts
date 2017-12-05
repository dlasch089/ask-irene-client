import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Selectables } from '../../models/select';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input() categories = null;
  @Output() handleChange = new EventEmitter<null>();

  constructor() { }

  ngOnInit() {
  }

  onCategoryChange(value) {
    event.preventDefault();
    this.handleChange.emit(value);
  }

}
