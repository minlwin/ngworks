import { Component, OnInit } from '@angular/core';
import { EditProfileState } from './edit-profile.state';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  providers:[
    EditProfileState
  ],
  styles: [
  ]
})
export class EditProfileComponent implements OnInit {

  readonly = true

  constructor(private state:EditProfileState) { }

  ngOnInit(): void {
  }

  save() {
    // save form data

    // reload view
  }

  edit() {
    this.readonly = !this.readonly
  }

}
