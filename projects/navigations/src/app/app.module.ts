import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnonymousComponent } from './anonymous/anonymous.component';
import { MemberComponent } from './member/member.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './anonymous/home/home.component';
import { PoliciesComponent } from './anonymous/policies/policies.component';
import { ProductsComponent } from './anonymous/products/products.component';
import { CategoriesComponent } from './anonymous/categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    AnonymousComponent,
    MemberComponent,
    AdminComponent,
    HomeComponent,
    PoliciesComponent,
    ProductsComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
