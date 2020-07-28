import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: any;
  @Output() increaseQuantity = new EventEmitter();
  @Output() decreaseQuantity = new EventEmitter();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  increaseCount () {
    this.increaseQuantity.emit();
  }

  decreaseCount () {
    this.decreaseQuantity.emit();
  }
}
