import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { ProductListComponent } from './components/product-catalog/product-list/product-list.component';
import { ProductFiltersComponent } from './components/product-catalog/product-filters/product-filters.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProductSortComponent } from './components/product-catalog/product-sort/product-sort.component';
import { ProductItemComponent } from './components/product-catalog/product-item/product-item.component';
import { CartListComponent } from './components/checkout/cart-list/cart-list.component';
import { CartItemComponent } from './components/checkout/cart-item/cart-item.component';
import { CartSummaryComponent } from './components/checkout/cart-summary/cart-summary.component';
import { SearchComponent } from './components/shared/search/search.component';
import { ProductPriceComponent } from './components/product-catalog/product-price/product-price.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ProductCatalogComponent,
    ProductListComponent,
    ProductFiltersComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    ProductSortComponent,
    ProductItemComponent,
    CartListComponent,
    CartItemComponent,
    CartSummaryComponent,
    SearchComponent,
    ProductPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
