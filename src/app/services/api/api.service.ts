/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  banners = [
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/3.jpg'}
  ];

  restaurants = [
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
      distance: 2.5,
      price: 10
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
      distance: 2.5,
      price: 10
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
      distance: 2.5,
      price: 10
    },
  ];

  allRestaurants = [
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
      price: 10
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
      price: 10
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
      price: 10
    },
  ];
  restaurants1 = [
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
      price: 10
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
      address: 'Vernier, Genève',
      distance: 2.5,
      price: 10
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
      address: 'Vernier, Genève',
      distance: 2.5,
      price: 10
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
        price: 12,
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
        price: 20,
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
        price: 15.50,
        rating: 0,
        status: true,
        uid: '12dsds12323',
        variation: false,
        veg: false
    },
  ];
}
