import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable()
export class EditProfileState {

  userProfile:FormGroup

  constructor(private builder:FormBuilder) {
    this.userProfile = builder.group({
      id:0,
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      personalInfo: builder.group({
        greeting: '',
        coverImage: '',
        dateOfBirth: '',
        gender: ''
      }),
      bankingInfo: builder.array([]),
      address: builder.array([])
    })
  }

  get bankingInfo() {
    return this.userProfile.get('baknkinInfo') as FormArray
  }

  get address() {
    return this.userProfile.get('address') as FormArray
  }

  deleteBankingInfo(index:number) {
    let target = this.bankingInfo.at(index) as FormGroup
    if(target.get('id')?.value == 0) {
      this.bankingInfo.removeAt(index)
    } else {
      target.patchValue({deleted : true})
    }
  }

  addBankingInfo() {

    this.bankingInfo.push(this.builder.group({
      id: 0,
      type: '',
      accountName: '',
      accountNumber: '',
      deleted: false
    }))
  }

  deleteAddress(index:number) {
    let target = this.address.at(index) as FormGroup
    if(target.get('id')?.value == 0) {
      this.address.removeAt(index)
    } else {
      target.patchValue({deleted : true})
    }
  }

  addAddress() {
    this.address.push(this.builder.group({
      id: 0,
      name: '',
      building: '',
      street: '',
      township: '',
      devision: '',
      deleted: false
    }))
  }
}
