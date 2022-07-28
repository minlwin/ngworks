import { Component, Input, OnInit } from '@angular/core';
import { ImgComponent } from '../img-component';

@Component({
  selector: 'app-img-one',
  templateUrl: './img-one.component.html',
  styles: [
  ]
})
export class ImgOneComponent implements ImgComponent, OnInit {

  constructor() { }

  @Input()
  images: string[] = []

  ngOnInit(): void {
  }

}
