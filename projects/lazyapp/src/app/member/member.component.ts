import { SecurityContext } from './../services/security/sercurity-context';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styles: [
  ]
})
export class MemberComponent implements OnInit {

  constructor(private context:SecurityContext) { }

  ngOnInit(): void {
  }

  get userName() {
    return this.context.security?.name
  }

}
