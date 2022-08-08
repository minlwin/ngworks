import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
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
      name: ['', Validators.required],
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
      name: ['', Validators.required],
      value: ['', Validators.required]
    }))
  }

  removeAttribute(index:number) {
    this.attributes.removeAt(index)

    if(this.attributes.controls.length == 0) {
      this.addAttribute()
    }
  }
}
