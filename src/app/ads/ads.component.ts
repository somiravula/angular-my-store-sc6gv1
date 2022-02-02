import { Component, ViewChild } from "@angular/core";
import { AdDirective } from "./ad.directive";
import { AdComponent, AdItem, AdsService } from "./ads.service";

@Component({
  selector: "ads",
  templateUrl: "./ads.component.html",
})
export class AdsComponent {
  ads: AdItem[];
  @ViewChild(AdDirective, {static: true}) adDirective!: AdDirective;
  private si: any;

  constructor(adsService: AdsService) {
    this.ads = adsService.getAds();

  }

  ngAfterViewInit() {
      if (!this.ads.length) return;
      let index = 0;
    this.si = setInterval(() => {
      this.adDirective.viewContainerRef.clear();
        if (index === this.ads.length) {
            index = 0;
        }
        const cmp = this.adDirective.viewContainerRef.createComponent<AdComponent>(this.ads[index].component);
        cmp.instance.data = this.ads[index].data;
        index++;
    }, 1000);
  }

  ngOnDestroy() {
      this.si.clearInterval();

  }

}
