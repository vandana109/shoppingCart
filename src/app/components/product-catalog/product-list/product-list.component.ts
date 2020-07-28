import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { FiltersService } from 'src/app/services/products/filters.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: any;
  productsCache: any;
  subscriptions: any;
  cartItemsCount: any;
  priceRange : any;
  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private filtersService: FiltersService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.fetchProducts(params);
        this.sortDataBy('asc');
      }
    );
    this.sortDataBy('asc');
    this.subscriptions = [];
    this.subscriptions.push(this.filtersService.getSortEmitter()
      .subscribe(data => {
        this.products = this.sortDataBy(data);
      }));
  }

  /**
   * @function fetchProducts
   * returns products based on the search params
   * @param searchParams - query params
   * @returns nothing, updates this.products
   */
  fetchProducts(searchParams) {
    this.productsService.getProducts().subscribe((data) => {
      this.productsCache = data;
      if (searchParams.search) {
        this.productsCache = this.productsCache.filter((product) => product.name.toLowerCase().includes(searchParams.search));
        this.products = this.filterProductsByRange(searchParams);
      } else {
        this.products = this.filterProductsByRange(searchParams);
      }
    })
  }

  /**
   * @function filterProducts
   * filters out products based on search by name
   * @param {string} searchText
   */
  filterProducts (searchText) {
    return this.productsCache.filter((product) => product.name.toLowerCase().includes(searchText));
  }

   /**
   * @function filterProductsByRange
   * filters out products based on price range, min and max
   * @param {object} range
   */
  filterProductsByRange (range) {
    if (range.minPrice && range.maxPrice) {
      return this.productsCache.filter((product) => product.price >= range.minPrice && product.price <= range.maxPrice);
    } else if (range.minPrice) {
      return this.productsCache.filter((product) => product.price >= range.minPrice);
    } else if (range.maxPrice) {
      return this.productsCache.filter((product) => product.price <= range.maxPrice);
    }
    return this.productsCache;
  }

  /**
   * @function addToCart
   * adds new item to cart list
   * @param {object} item
   */
  addToCart (item) {
    this.cartService.addToCartItems(item);
  }

  /**
   * @function sortByNameAsc
   * sorts products by propertyname in ascending order
   * @param {string} propertyName
   * @returns {object} sorted products list
   */
  sortByNameAsc (propertyName) {
    return this.products.sort((a,b) => {
      if (a[propertyName].toLowerCase() < b[propertyName].toLowerCase())
        return -1;
      if (a[propertyName].toLowerCase() > b[propertyName].toLowerCase())
        return 1;
      return 0;
    });
  }

   /**
   * @function sortByNameDesc
   * sorts products by propertyname in decending order
   * @param {string} propertyName
   * @returns {object} sorted products list
   */
  sortByNameDesc (propertyName) {
    return this.products.sort((b,a) => {
      if (a[propertyName] < b[propertyName])
        return -1;
      if (a[propertyName] > b[propertyName])
        return 1;
      return 0;
    });
  }

  sortDataBy (order) {
    if (order === undefined) {
      return this.sortByNameAsc('name');
    }
    if (order === 'asc' || order === 'desc') {
      return order === 'asc' ? this.sortByNameAsc('name') : this.sortByNameDesc('name');
    }
    return order === 'lth' ? this.products.sort((a,b) => a.price - b.price)
      : this.products.sort((a,b) => b.price - a.price);
  }
}
