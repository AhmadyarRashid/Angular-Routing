import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductsDetailsComponent} from './products-details/products-details.component';

const routes: Routes = [
  {path:'products' , component: ProductsComponent},
  {path: 'productDetails/:id' , component : ProductsDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
