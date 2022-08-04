import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainOneComponent } from './main/main-one/main-one.component';
import { MainTwoComponent } from './main/main-two/main-two.component';
import { MainThreeComponent } from './main/main-three/main-three.component';
import { SideOneComponent } from './side/side-one/side-one.component';
import { SideTwoComponent } from './side/side-two/side-two.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOneComponent,
    MainTwoComponent,
    MainThreeComponent,
    SideOneComponent,
    SideTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
