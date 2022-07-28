import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';
import { ImgHostDirective } from './img-host.directive';
import { Component, OnInit, ViewChild } from '@angular/core';
import { OneComponent } from './one/one.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{

  title = 'dynamic_demo';

  index:number = 0

  @ViewChild(ImgHostDirective, {static: true})
  imageHost!:ImgHostDirective

  ngOnInit(): void {
    this.loadComponent(1)
  }

  loadComponent(id:number) {
    this.index = id
    const viewContainerRef = this.imageHost.viewContainerRef
    viewContainerRef.clear()
    switch(id) {
      case 1:
        viewContainerRef.createComponent(OneComponent)
        break;
      case 2:
        viewContainerRef.createComponent(TwoComponent)
        break;
      default:
        viewContainerRef.createComponent(ThreeComponent)
        break;
    }
  }
}
