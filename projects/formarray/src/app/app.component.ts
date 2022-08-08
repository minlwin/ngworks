import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  form:FormGroup

  constructor(private builder:FormBuilder) {
    this.form = builder.group({
      name: '',
      attributes: builder.array([
      ])
    })

    this.addAttribute()
  }

  get attributes() {
    return this.form.get('attributes') as FormArray<FormGroup>
  }

  addAttribute() {
    this.attributes.push(this.builder.group({
      name: '',
      value: ''
    }))
  }

  removeAttribute(index:number) {
    this.attributes.removeAt(index)

    if(this.attributes.controls.length == 0) {
      this.addAttribute()
    }
  }
}
