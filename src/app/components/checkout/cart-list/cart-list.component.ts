import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input() cartItems: {};
  @Input() cartItemsArray: string[];
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  /**
   * @function increaseQuantity will increase number of product quantities by one
   * @param {Object} productId, reference of product item
   * @returns nothing
   */
  increaseQuantity (productId) {
    this.cartItems[productId].quantity++;
    this.cartService.changeCartCount(true);
  }

  /**
   * @function decreaseQuantity will decrease number of product quantities by one
   * @param {Object} productId, reference of product item
   * @returns nothing
   */
  decreaseQuantity (productId) {
    if (this.cartItems[productId].quantity > 0) {
      this.cartItems[productId].quantity--;
      this.cartService.changeCartCount(false);
    }
  }
}
