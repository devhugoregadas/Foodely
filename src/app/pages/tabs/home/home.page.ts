import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOptions = {
    slidesPerView: 1.1 // To show the a portion of the next slide.
  };

  constructor() { }

  ngOnInit() {
  }

}
