import { Injectable } from '@angular/core';

import { Filter } from '../models/filter';
import { Flag } from '../models/flags';

@Injectable()
export class FilterService {

  filter: Filter = new Filter();
  flag: Flag;
  allFlags: any = {
    categories: [],
    district: [],
    situation: [],
    price: [],
    vibe: [],
    tags: []
  };
  flags: any = [];

  constructor() { }

  newFilter() {
    return this.filter = new Filter();
  }

  addCheckedValue(itemArray, filterType): Object {
    for (let ix = 0; ix < itemArray.length; ix++) {
      const itemObject: Flag = {
        name: itemArray[ix],
        checked: false
      };
      this.allFlags[filterType].push(itemObject);
    }
    return this.allFlags;
  }

}
