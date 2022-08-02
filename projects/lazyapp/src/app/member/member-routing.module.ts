import { ProductDetailsComponent } from './../widgets/pages/product-details/product-details.component';
import { ProductsComponent } from './../widgets/pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent ,
    children: [
      {path: 'products/details/:id', component: ProductDetailsComponent},
      {path: 'products/category/:category', component: ProductsComponent},
      {path: 'products/seller/:seller', component: ProductsComponent},
      {path: 'products', component: ProductsComponent},
      {path: '', redirectTo: 'products', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
