import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './anonymous.component.html',
  styles: [
  ]
})
export class AnonymousComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    this.router.navigate(['/member'])
  }
}
