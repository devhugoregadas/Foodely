import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Record Found'
  };
  isLoading: boolean;
  query: any;
  allRestaurants: any[] = [
    {
      uid: '12dsds12323',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      shortName: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      price: 100
    },
    {
      uid: '13dsds12323',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      shortName: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      price: 100
    },
    {
      uid: '14dsds12323',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      shortName: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      price: 100
    },
  ];

  restaurants: any[] = [];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
  }


  /**
   *
   * @param onSearchChange method to search the object on the object array allRestaurants
   */

  async onSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0) {
      this.isLoading = true;
      setTimeout(async () => {
        this.restaurants = await this.allRestaurants.filter((element: any) => element.shortName.includes(this.query));
        this.isLoading = false;
      }, 3000);
    }
  }

}
