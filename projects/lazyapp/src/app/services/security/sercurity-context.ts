import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class SecurityContext {
  security?:SecurityInfo
}

export interface SecurityInfo {
  name:string
  role:'Admin' | 'Member'
  email:string
}
