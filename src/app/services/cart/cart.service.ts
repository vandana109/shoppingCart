import { map } from 'rxjs/operators';
import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartCount : number = 0;
  cartCountEmitter: EventEmitter<number> = new EventEmitter();
  cartItems = {};

  constructor() { }

  getCartItems () {
    return this.cartItems;
  }

  addToCartItems (newItem) {
    this.changeCartCount(true);
    if (this.cartItems[newItem.productId]) {
      this.cartItems[newItem.productId].quantity++;
    } else {
      const {
        productId,
        name,
        price } = newItem;
      this.cartItems[productId] =  {
        productId,
        name,
        price,
        quantity : 1
      };
    }

    let cartItems = {};
    for (let item in this.cartItems) {
      cartItems[item] = this.cartItems[item].quantity;
    }
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  changeCartCount(increaseByOne) {
    if (increaseByOne === true) {
      this.cartCount++;
    } else if (increaseByOne === false && this.cartCount > 0) {
      this.cartCount--;
    }
    this.cartCountEmitter.emit(this.cartCount);
  }

  getCartCountEmitter () {
    return this.cartCountEmitter;
  }

  getTotalCartItems () {
    let total = 0;
    for (let item in this.cartItems) {
      total += this.cartItems[item].quantity;
    }
    return total;
  }
}
