import { Component, OnInit, Input, AfterContentChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Banner } from 'src/app/models/banner.model';

// import Swiper core and required modules
import SwiperCore, { SwiperOptions, Pagination, Keyboard } from 'swiper';
SwiperCore.use([Pagination, Keyboard]); // pass Autoplay here & above if in use

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterContentChecked {

  @Input() bannerImages: Banner[];
  slideOptions: SwiperOptions = {};

  constructor(public router: Router) { }

  ngOnInit() {
    console.log(this.bannerImages);
  }

  ngAfterContentChecked(): void {
    this.slideOptions = {
      slidesPerView: 1.2,  
      pagination: { clickable: true },
      keyboard: { enabled: true },
      centeredSlides: true,
      initialSlide: this.bannerImages?.length > 1 ? 1 : 0,
      loop: true,
    };
  }

  goToRestaurant(data) {
    if(data?.res_id) {
      this.router.navigate(['/', 'tabs', 'restaurants', data.res_id]);
    }
  }

}
