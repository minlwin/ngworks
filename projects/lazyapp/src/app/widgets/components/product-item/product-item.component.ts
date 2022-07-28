import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styles: [
  ]
})
export class ProductItemComponent implements OnInit {

  @Input()
  item!:any

  constructor() { }

  ngOnInit(): void {
  }

}
