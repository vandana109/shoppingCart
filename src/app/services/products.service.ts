import { Product } from './../models/product/product.model';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

const PRODUCTS = [
  new Product(8488757, "RUN CUSHION WOMEN'S JOGGING SHOES - GREEN", 1299, 'assets/p1568028.jpg'),
	new Product(8556925, "KIPRUN KD LIGHT MEN'S RUNNING SHOES - YELLOW", 6499, 'assets/p1767207.jpg'),
	new Product(8380015, "ACTIVE BREATH WOMEN'S RUNNING SHOES - GREY", 999, 'assets/p1072109.jpg'),
	new Product(8488443, "RUN ACTIVE WOMEN'S JOGGING SHOES BURGUNDY PINK", 1999, 'assets/p1257538.jpg'),
	new Product(8561405, "KIPRUN TR MEN'S TRAIL RUNNING SHOES - DARK BLUE/YELLOW", 4499, 'assets/p1763834.jpg'),
  new Product(8505777, "MEN'S RUNNING SHOES KIPRUN KD PLUS - BLUE", 7499, 'assets/p1568125.jpg'),
  new Product(8559117, "RUN SUPPORT MEN'S JOGGING SHOES - DARK BLUE" ,  2299, 'assets/p1794812.jpg')
];

let productsObservable = of(PRODUCTS);

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
	getProducts(): Observable<Product[]> {
	  return productsObservable;
	}
}
