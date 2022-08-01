import { ProductSerivce } from './../../../services/api/product.service';
import { map, tap, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  data?:any
  coverImage:string = ""

  constructor(route:ActivatedRoute, private service:ProductSerivce) {
    route.params.pipe(
      map(param => param['id']),
      mergeMap(id => service.findById(id))
    ).subscribe(result => {
      this.data = result
      this.coverImage = this.data.images[0]
    })
  }

  ngOnInit(): void {
  }

}
