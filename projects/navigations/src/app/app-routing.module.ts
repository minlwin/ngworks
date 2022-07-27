import { MemberComponent } from './member/member.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { HomeComponent } from './anonymous/home/home.component';
import { ProductsComponent } from './anonymous/products/products.component';
import { PoliciesComponent } from './anonymous/policies/policies.component';
import { CategoriesComponent } from './anonymous/categories/categories.component';

const routes: Routes = [
  {
    path: 'public', component: AnonymousComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'product', component: ProductsComponent},
      {path: 'category', component: CategoriesComponent},
      {path: 'policy', component: PoliciesComponent},
      {path: '', redirectTo: 'home', pathMatch: 'prefix'}
    ]
  },
  {path: 'admin', component: AdminComponent},
  {path: 'member', component: MemberComponent},
  {path: '', redirectTo: '/public/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
