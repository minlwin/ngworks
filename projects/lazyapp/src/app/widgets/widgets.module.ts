import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { TopSellersComponent } from './components/top-sellers/top-sellers.component';
import { CompactNumberPipe } from './pipes/compact-number.pipe';
import { ProductsComponent } from './pages/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ImgOneComponent } from './components/product-item/img-one/img-one.component';
import { ImgTwoComponent } from './components/product-item/img-two/img-two.component';
import { ImgThreeComponent } from './components/product-item/img-three/img-three.component';
import { ImgFourComponent } from './components/product-item/img-four/img-four.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    TopSellersComponent,
    CompactNumberPipe,
    ProductsComponent,
    ProductItemComponent,
    ImgOneComponent,
    ImgTwoComponent,
    ImgThreeComponent,
    ImgFourComponent
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
