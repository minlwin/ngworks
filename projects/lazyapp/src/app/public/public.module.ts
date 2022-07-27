import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    WidgetsModule
  ]
})
export class PublicModule { }
