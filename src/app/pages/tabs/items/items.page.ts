import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  id: any;
  data: any = {};
  items: any[] = [];
  veg = false;
  restaurants = [
    {
      uid: '12dsds12323',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      shortName: 'stayfit',
      address: 'Vernier, Genève',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      deliveryTime: 25,
      distance: 2.5,
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
      address: 'Acacias, Genève',
      distance: 2.5,
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
      address: 'Meyrin, Genève',
      distance: 2.5,
      price: 100
    },
  ];

  categories: any[] = [
    {
      id: 'e00',
      name: 'Italian',
      uid: '12dsds12323'
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '12dsds12323'
    },
  ];

  allItems = [
    {
        categoryId: 'e00',
        cover: 'assets/imgs/pizza.jpg',
        desc: 'Great in taste',
        id: 'i1',
        name: 'Pizza',
        price: 120,
        rating: 0,
        status: true,
        uid: '12dsds12323',
        variation: false,
        veg: false
    },
    {
        categoryId: 'e0',
        cover: 'assets/imgs/salad.jpg',
        desc: 'Great in taste',
        id: 'i2',
        name: 'Caprese Salad',
        price: 200,
        rating: 0,
        status: true,
        uid: '12dsds12323',
        variation: false,
        veg: true
    },
    {
        categoryId: 'e00',
        cover: 'assets/imgs/pasta.jpg',
        desc: 'Great in taste',
        id: 'i3',
        name: 'Pasta',
        price: 150,
        rating: 0,
        status: true,
        uid: '12dsds12323',
        variation: false,
        veg: false
    },
  ];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log('data: ', paramMap);
      if(!paramMap.has('restaurantId')) {
        this.navCtrl.back();
        return;
      }
      this.id = paramMap.get('restaurantId');
      console.log('id: ', this.id);
      this.getItems();
    });
  }

  getItems() {
    this.data = {};
    const data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    this.items = this.allItems;
    console.log('restaurant: ', this.data);
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

  vegOnly(event) {
    console.log(event.detail.checked);
  }

}
