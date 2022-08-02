import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemberRoutingModule } from './member-routing.module';
import { MemberComponent } from './member.component';
import { WidgetsModule } from '../widgets/widgets.module';


@NgModule({
  declarations: [
    MemberComponent
  ],
  imports: [
    CommonModule,
    MemberRoutingModule,
    WidgetsModule
  ]
})
export class MemberModule { }
