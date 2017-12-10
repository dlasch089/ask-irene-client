import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Flag } from '../../models/flags';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  @Input() items: Array<string> = null;
  @Input() max: number;
  @Input() selected: Array<string> = []; // Error: Argument of type 'any[]' is not assignable to parameter of type 'null'.  

  @Output() onChange = new EventEmitter<Array<string>>();
  @Output() onCheck = new EventEmitter<object>();

  flags: Array<Flag> = [];

  constructor() { }

  ngOnInit() {
    this.addCheckedValue (this.items);
  }

  addCheckedValue(itemArray): Array<object> {
    for (let ix = 0; ix < itemArray.length; ix++) {
      const itemObject: Flag = {
        name: itemArray[ix],
        checked: false
      };
      this.flags.push(itemObject);
    }
    return this.flags;
  }

  handleChange(value, ix) {
    if (this.selected.indexOf(value) === -1) {
      this.flags[ix].checked = true;
      this.onCheck.emit(this.flags[ix]);
      // event.preventDefault();
      this.selected.push(value);
      this.onChange.emit(this.selected);
    } else {
      this.flags[ix].checked = false;
      this.onCheck.emit(this.flags[ix]);
      // event.preventDefault();
      const index = this.selected.indexOf(value);
      this.selected.splice(index, 1);
      this.onChange.emit(this.selected);
    }
  }
}
