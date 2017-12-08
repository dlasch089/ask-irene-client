import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {

  @Input() selectorItems: Array<string> = null;
  @Output() onChange = new EventEmitter<Array<string>>();
  @Input() max: number;

  @Input() selected: Array<string> = []; // Error: Argument of type 'any[]' is not assignable to parameter of type 'null'.

  constructor() { }

  ngOnInit() {
    // this.selected = [];
  }

  handleAdd(value) {
    event.preventDefault();
    this.selected.push(value);
    this.onChange.emit(this.selected);
  }

  handleDelete(value, index) {
    event.preventDefault();
    this.selected.splice(index, 1);
    this.onChange.emit(this.selected);
  }

}
