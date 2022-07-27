import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TopSellersComponent } from './components/top-sellers/top-sellers.component';
import { CompactNumberPipe } from './pipes/compact-number.pipe';
import { ProductsComponent } from './pages/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoryListComponent,
    TopSellersComponent,
    CompactNumberPipe,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    CategoryListComponent,
    TopSellersComponent,
    CompactNumberPipe
  ]
})
export class WidgetsModule { }
