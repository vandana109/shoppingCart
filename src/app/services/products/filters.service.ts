import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {
  sortEmitter: EventEmitter<string> = new EventEmitter();
  filters : any = {};
  constructor() { }

  getSortEmitter() {
    return this.sortEmitter;
  }
}
