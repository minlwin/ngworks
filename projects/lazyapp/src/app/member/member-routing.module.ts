import { MemberSideMenuComponent } from './../widgets/components/member-side-menu/member-side-menu.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { ProductDetailsComponent } from './../widgets/pages/product-details/product-details.component';
import { ProductsComponent } from './../widgets/pages/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberComponent } from './member.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: '',
    component: MemberComponent ,
    children: [
      {
        path: 'profile',
        children: [
          {path: 'edit', component: EditProfileComponent},
          {path: 'products', component: MyProductsComponent},
          {path: 'sales', component: MySalesComponent},
          {path: 'purchases', component: MyPurchasesComponent},
          {path: 'changepass', component: ChangePassComponent}
        ]
      },
      {path: 'products/details/:id', component: ProductDetailsComponent},
      {path: 'products/details/:id', component: MemberSideMenuComponent, outlet: 'sideMenu'},
      {path: 'products/category/:category', component: ProductsComponent},
      {path: 'products/category/:category', component: MemberSideMenuComponent, outlet: 'sideMenu'},
      {path: 'products/seller/:seller', component: ProductsComponent},
      {path: 'products/seller/:seller', component: MemberSideMenuComponent, outlet: 'sideMenu'},
      {path: 'products', component: ProductsComponent},
      {path: 'products', outlet: 'sideMenu', component: MemberSideMenuComponent},
      {path: '', redirectTo: 'products', pathMatch: 'prefix'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberRoutingModule { }
