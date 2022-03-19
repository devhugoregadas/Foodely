/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/member-ordering */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  banners = [
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/3.jpg'}
  ];

  restaurants = [
    {
      uid: '12wefdss',
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
      uid: '12wefdefsdss',
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
      uid: '12wefdssrete',
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
      uid: '12wefdss',
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
      uid: '12wefdefsdss',
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
      uid: '12wefdssrete',
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
      uid: '12wefdss',
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
      uid: '12wefdefsdss',
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
      uid: '12wefdssrete',
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
      uid: '12wefdefsdss'
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '12wefdss'
    },
    {
      id: 'e0',
      name: 'Mexican',
      uid: '12wefdss'
    },
  ];

  allItems = [
      {
        categoryId: 'e0',
        cover: 'assets/imgs/salad.jpg',
        desc: 'Great in taste',
        id: 'i2',
        name: 'Caprese Salad',
        price: 20,
        rating: 0,
        status: true,
        uid: '12wefdefsdss',
        variation: false,
        veg: true
    },
    {
        categoryId: 'e00',
        cover: 'assets/imgs/pizza.jpg',
        desc: 'Great in taste',
        id: 'i1',
        name: 'Pizza',
        price: 12,
        rating: 0,
        status: true,
        uid: '12wefdss',
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
        uid: '12wefdss',
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
        uid: '12wefdss',
        variation: false,
        veg: false
    },
  ];

  addresses: any[] = [
    {address: 'Chemin de Esplanade 24, 1214 Vernier, Genève', house: 'Ground Floor', id: '7Kox63KlggTvV7ebRKar', landmark: 'Vernier', lat: 46.1936965, lng: 6.1434935, title: 'home', userId: '1'},
    {address: 'Rue du 31 Décembre 26, Genève', house: 'Ground Floor', id: '8Kox63KlggTvV7ebRKar', landmark: 'Lake', lat: 46.2043907, lng: 6.1431577, title: 'work', userId: '1'}
  ];

  orders: any[] = [
    {
      address: {address: 'Route de Vernier, Genève', house: 'dsgd', id: 'cLQdnS8YXk5HTDfM3UQC', landmark: 'fdgs', lat: 46.1936965, lng: 6.1434935, title: 'house', userId: '1' },
      deliveryCharge: 20,
      grandTotal: '54.00',
      id: '5aG0RsPuze8NX00B7uRP',
      order: [
        {categoryId: 'e0', cover: 'assets/imgs/salad.jpg', desc: 'Great in taste', id: 'i2', name: 'Caprese Salad', price: 20, rating: 0, status: true, uid: '12wefdefsdss', variation: false, veg: true, quantity: 1},
      ],
      paid: 'COD',
      restaurant:
      {
        uid: '12wefdefsdss',
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
      restaurantId: '12wefdefsdss',
      status: 'created',
      time: 'Mar 16, 2022 04:20 AM',
      total: '52.00',
      userId: '1'
    },
    {
      address: {address: 'Route de Vernier 17, Genève', house: 'dsgd', id: 'cLQdnS8YXk5HTDfM3UQC', landmark: 'fdgs', lat: 46.1936965, lng: 6.1434935, title: 'House', userId: '1' },
      deliveryCharge: 20,
      grandTotal: '44.00',
      id: '5aG0RsPuze8NX00B7uR1',
      order: [
        {categoryId: 'e00', cover: 'assets/imgs/pizza.jpg', desc: 'Great in taste', id: 'i1', name: 'Pizza', price: 12, quantity: 1, rating: 0, status: true, uid: '12wefdss', variation: false, veg: false},
        {categoryId: 'e00', cover: 'assets/imgs/pasta.jpg', desc: 'Great in taste', id: 'i3', name: 'Pasta', price: 15, quantity: 2, rating: 0, status: true, uid: '12wefdss', variation: false, veg: false}
      ],
      paid: 'COD',
      restaurant: {address: 'Rue de Carouge 21, Genève', city: '1217', closeTime: '20:00', cover: 'assets/imgs/1.jpg', cuisines: ['Italian', 'Mexican'], deliveryTime: 25, description: 'dd', email: 'stay@fit.com', uid: '12wefdss', isClose: true, latitude: 46.203691, longitude: 6.148721, name: 'Stayfit', openTime: '08:00', phone: 7867457945, price: 25, rating: 0, shortName: 'stayfit', status: 'open', totalRating: 0},
      restaurantId: '12dsds12323',
      status: 'Delivered',
      time: 'Mar 17, 2022 04:20 AM',
      total: '42.00',
      userId: '1'
    },
  ];

  constructor() { }
}
