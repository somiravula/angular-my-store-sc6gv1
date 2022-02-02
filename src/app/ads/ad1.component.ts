import { Component, ViewChild } from "@angular/core";
import { AdComponent } from "./ads.service";

@Component({
  template: `
  hello my name is {{data.name}}
  `,
})
export class Ad1Component implements AdComponent {
  data: any;
}