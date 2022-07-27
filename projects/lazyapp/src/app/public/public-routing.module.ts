import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from '../widgets/pages/products/products.component';
import { PublicComponent } from './public.component';

const routes: Routes = [
  { path: '', component: PublicComponent, children: [
    {path: 'products/category/:category', component: ProductsComponent},
    {path: 'products/seller/:seller', component: ProductsComponent},
    {path: 'products', component: ProductsComponent},
    {path: '', redirectTo: 'products', pathMatch: 'full'}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
