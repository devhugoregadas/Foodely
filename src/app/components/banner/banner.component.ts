import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {


  @Input() bannerImages: any[] = [];
  slideOptions = {
    slidesPerView: 1.1 // To show the a portion of the next slide.
  };

  constructor() { }

  ngOnInit() {}

}
