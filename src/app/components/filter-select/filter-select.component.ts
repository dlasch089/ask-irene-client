import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { Flag } from '../../models/flags';

import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.css']
})
export class FilterSelectComponent implements OnInit {

  @Input() items: Array<string> = null;
  @Input() filterType:  any;
  @Input() max: number;
  @Input() selected: Array<string> = []; // Error: Argument of type 'any[]' is not assignable to parameter of type 'null'.  

  @Output() onChange = new EventEmitter<Array<string>>();
  // @Output() onCheck = new EventEmitter<object>();

  allFlags: any;

  constructor(
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.allFlags = this.filterService.addCheckedValue(this.items, this.filterType);
    // this.addCheckedValue (this.items);
    // console.log('Oninit: ');
    // console.log(this.allFlags);
  }

  // addCheckedValue(itemArray): Array<object> {
  //   for (let ix = 0; ix < itemArray.length; ix++) {
  //     const itemObject: Flag = {
  //       name: itemArray[ix],
  //       checked: false
  //     };
  //     this.flags.push(itemObject);
  //   }
  //   // console.log('from filter-select: ' + this.flags);
  //   return this.flags;
  // }

  handleChange(value, ix, filter) {
    if (this.selected.indexOf(value) === -1) {
      console.log('OnClick: ');
      console.log(this.allFlags, filter);
      this.allFlags[filter][ix].checked = true;
      // this.flags.filterType[ix].checked = true;
      // this.onCheck.emit(this.flags[ix]);
      // event.preventDefault();
      this.selected.push(value);
      this.onChange.emit(this.selected);
      // console.log(this.selected);
      this.filterService.allFlags = this.allFlags;
    } else {
      this.allFlags[filter][ix].checked = false;
      // this.flags.filterType[ix].checked = false;
      // this.onCheck.emit(this.flags[ix]);
      // event.preventDefault();
      const index = this.selected.indexOf(value);
      this.selected.splice(index, 1);
      this.onChange.emit(this.selected);
      this.filterService.allFlags = this.allFlags;
      console.log('OnUnClick: ');
      console.log(this.filterService.allFlags, this.allFlags);

    }
  }
}
