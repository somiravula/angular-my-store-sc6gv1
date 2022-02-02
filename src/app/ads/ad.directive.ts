import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[ad]",
})
export class AdDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }
}