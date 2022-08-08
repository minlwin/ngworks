import { EditProfileState } from './../edit-profile.state';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './shipping-info.component.html',
  styles: [
  ]
})
export class ShippingInfoComponent implements OnInit {

  constructor(private state:EditProfileState) {
    state.view = 'ship'
  }

  ngOnInit(): void {
  }

}
