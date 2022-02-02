import {Injectable, Type} from "@angular/core";
import { Ad1Component } from "./ad1.component";
import { Ad2Component } from "./ad2.component";

@Injectable({providedIn: "root"})
export class AdsService {
    public getAds(): AdItem[] {
        return [
          {
            component: Ad2Component,
            data: {name: "somesh"},
          },
          
          {
            component: Ad1Component,
            data: {name: "deeshu"},
          }
        ];
    }
}

export interface AdItem extends AdComponent {
  component: Type<any>;
}

export interface AdComponent {
    data: any;
}