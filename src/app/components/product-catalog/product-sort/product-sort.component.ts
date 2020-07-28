import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FiltersService } from 'src/app/services/products/filters.service';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.scss']
})
export class ProductSortComponent implements OnInit {
  sortingValue : string = 'htl';
  sortingOptions : any;
  @Output() sortEmitter: EventEmitter<object> = new EventEmitter();
  constructor( private filtersService: FiltersService) { }

  ngOnInit(): void {
    this.sortingOptions = [
      { value: 'asc', param: 'name', text: 'Sort by Name Asc'},
      { value: 'desc', param: 'name', text: 'Sort by Name Desc'},
      { value: 'lth', param: 'price',text: 'Sort by Price LTH'},
      { value: 'htl', param: 'price', text: 'Sort by Price HTL'}
    ];
  }

  /**
   * @function onOptionSelected
   * fires an event emitter with selected dropdown value
   * @param value
   */
  onOptionSelected (value) {
    this.filtersService.sortEmitter.emit(value);
  }
}
