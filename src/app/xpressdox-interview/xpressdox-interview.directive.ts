import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[xpressdox-interview-host]'
})
export class XpressdoxInterviewDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
