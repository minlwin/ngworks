import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { WidgetsModule } from '../widgets/widgets.module';
import { MyProductsComponent } from './my-products/my-products.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { MySalesComponent } from './my-sales/my-sales.component';
import { ChangePassComponent } from './change-pass/change-pass.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@NgModule({
  declarations: [
    MemberComponent,
    MyProductsComponent,
    MyPurchasesComponent,
    MySalesComponent,
    ChangePassComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    WidgetsModule
  ]
})
export class MemberModule { }
