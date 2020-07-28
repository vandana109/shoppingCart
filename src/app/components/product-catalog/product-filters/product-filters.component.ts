import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Router } from '@angular/router';

@Component({
  selector: 'app-product-filters',
  templateUrl: './product-filters.component.html',
  styleUrls: ['./product-filters.component.scss']
})
export class ProductFiltersComponent implements OnInit {
  model: any = {};
  filtersApplied : boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    let queryParams = this.route.snapshot.queryParams;
    this.model.minPrice = queryParams.minPrice;
    this.model.maxPrice = queryParams.maxPrice;
  }

  /**
   * @function applyFilters
   * updates route with minPrice and maxPrice as the query params
   * @returns nothing
   */
  applyFilters() {
    this.filtersApplied = true;
    let queryParams = Object.assign({}, this.route.snapshot.queryParams);
    if (this.model.minPrice) {
      queryParams.minPrice = this.model.minPrice;
    } else {
      delete queryParams.minPrice;
    }

    if (this.model.maxPrice) {
      queryParams.maxPrice = this.model.maxPrice;
    } else {
      delete queryParams.maxPrice;
    }

    this.router.navigate(['/shop'], { queryParams });
  }

  /**
   * @function clearFilters
   * removes minprice and maxprice as the query params on the route
   * and updates form
   * @returns nothing
   */
  clearFilters () {
    this.filtersApplied = false;
    this.model = {minPrice: '', maxPrice : ''};
    let queryParams = Object.assign({}, this.route.snapshot.queryParams);
    delete queryParams.minPrice;
    delete queryParams.maxPrice;
    this.router.navigate(['/shop'], { queryParams });
  }

  /**
   * @function searchTextChanged
   * @param {String} value - value from the search field
   * updates route with search query param
   */
  searchTextChanged (value) {
    let queryParams = this.route.snapshot.queryParams
    if (value) {
      queryParams.search = value;
    }
    this.router.navigate(['/shop'], { queryParams });
  }
}
