import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-price',
  templateUrl: './product-price.component.html',
  styleUrls: ['./product-price.component.scss']
})
export class ProductPriceComponent implements OnInit {
  @Input() price: number;
  currencySymbol: any;
  currencyFactor: number;
  countryPrice: string;
  constructor() { }

  ngOnInit(): void {
    // assuming api is returning prices for country india
    this.currencySymbol = '₹';
    this.currencyFactor = 1; //india
    this.countryPrice = `${this.currencySymbol}${this.price * this.currencyFactor}`;
  }

}
