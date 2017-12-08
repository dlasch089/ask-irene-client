import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  handleChange(value) {
    if (this.selected.indexOf(value) === -1) {
      event.preventDefault();
      this.selected.push(value);
      this.onChange.emit(this.selected);
    } else {
      event.preventDefault();
      const index = this.selected.indexOf(value)
      this.selected.splice(index, 1);
      this.onChange.emit(this.selected);

    }
  }

  handleDelete(value, index) {
  }

}
