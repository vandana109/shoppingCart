import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../models/product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  showMessage : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMessageFn () {
    this.showMessage = true;
    setTimeout (() => {
      this.showMessage = false;
   }, 1000);
  }
}
