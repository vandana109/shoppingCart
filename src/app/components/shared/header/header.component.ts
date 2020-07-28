import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() cartCount;
  cartItemsCount : number = 0;
  subscription: any;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const cartItems = this.cartService.getCartItems();
    this.cartItemsCount = this.cartService.getTotalCartItems();
    this.subscription = this.cartService.getCartCountEmitter()
      .subscribe(item => {
        this.cartItemsCount = item || 0;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
