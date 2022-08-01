import { ProductSerivce } from './../../../services/api/product.service';
import { map, tap, mergeMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { SecurityContext } from '../../../services/security/sercurity-context';

@Component({
  templateUrl: './product-details.component.html',
  styles: [
  ]
})
export class ProductDetailsComponent implements OnInit {

  data?:any
  coverImage:string = ""

  constructor(
    route:ActivatedRoute,
    private service:ProductSerivce,
    private securityContext:SecurityContext,
    private router:Router) {
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

  purchase() {
    if(this.securityContext.security) {

    }

    this.router.navigate(['/public', 'signin'])
  }

  askQuestion() {
    if(this.securityContext.security) {

    }

    this.router.navigate(['/public', 'signin'])
  }

  get features() {
    return Object.keys(this.data?.features || {})
  }
}
