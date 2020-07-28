import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCatalogComponent } from './components/product-catalog/product-catalog.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';


const routes: Routes = [
  { path: '',
    redirectTo: '/shop',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ProductCatalogComponent
  },
  { path: 'checkout',
    component: CheckoutComponent
  },
  { path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
