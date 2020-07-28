import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  totalPrice : number;
  discountPercent : number;
  @Input() cartItems: {};
  @Input() cartItemsArray: string[];
  currencySymbol : any = '₹';;
  constructor() { }

  ngOnInit(): void {
    this.discountPercent = 10;
  }

  getTotalPrice () {
    let total = 0;
    for (let item in this.cartItems) {
      total += this.cartItems[item].price * this.cartItems[item].quantity;
    }
    this.totalPrice = total;
    return total;
  }

  getPriceAfterDiscount () {
    return this.totalPrice - (this.totalPrice * this.discountPercent/100);
  }

  getTotalPriceForProduct (price, quantity) {
    return price * quantity;
  }

}
