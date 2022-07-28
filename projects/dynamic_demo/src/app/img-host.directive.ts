import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appImgHost]'
})
export class ImgHostDirective {

  constructor(public viewContainerRef:ViewContainerRef) { }

}
