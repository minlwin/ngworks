import { SideTwoComponent } from './side/side-two/side-two.component';
import { MainThreeComponent } from './main/main-three/main-three.component';
import { MainTwoComponent } from './main/main-two/main-two.component';
import { MainOneComponent } from './main/main-one/main-one.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideOneComponent } from './side/side-one/side-one.component';

const routes: Routes = [
  {path: 'one', component: MainOneComponent},
  {path: 'side', component: SideOneComponent, outlet: 'sideMenu'},
  {path: 'two', component: MainTwoComponent},
  {path: 'three', component: MainThreeComponent},
  {path: '', redirectTo: '/one(sideMenu:side)', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
