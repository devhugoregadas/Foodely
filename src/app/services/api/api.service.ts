import { Injectable } from '@angular/core';
import { Address } from 'src/app/models/address.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { Order } from 'src/app/models/order.model';
import { Restaurant } from 'src/app/models/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  banners = [  
    {banner: 'assets/imgs/1.jpg'},
    {banner: 'assets/imgs/2.jpg'},
    {banner: 'assets/imgs/3.jpg'}  
  ];
  
  restaurants: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10
    },
  ];

  allRestaurants: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      price: 10
    },
  ];

  restaurants1: Restaurant[] = [
    {
      uid: '12wefdss',
      cover: 'assets/imgs/1.jpg',
      name: 'Stayfit',
      short_name: 'stayfit',
      address: 'Vernier, Genève',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdefsdss',
      cover: 'assets/imgs/2.jpg',
      name: 'Stayfit1',
      short_name: 'stayfit1',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      address: 'Vernier, Genève',
      distance: 2.5,
      price: 10
    },
    {
      uid: '12wefdssrete',
      cover: 'assets/imgs/3.jpg',
      name: 'Stayfit2',
      short_name: 'stayfit2',
      cuisines: [
        'Italian',
        'Mexican'
      ],
      rating: 5,
      delivery_time: 25,
      address: 'Vernier, Genève',
      distance: 2.5,
      price: 10
    },
  ];
  
  categories: Category[] = [
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdefsdss"
    },
    {
      id: "e00",
      name: "Italian",
      uid: "12wefdss"
    },
    {
      id: "e0",
      name: "Mexican",
      uid: "12wefdss"
    },
  ]; 

  allItems: Item[] = [
    
    {
      category_id: "e0",
      cover: "assets/imgs/salad.jpg",
      desc: "Great in taste",
      id: "i2",
      name: "Caprese Salad",
      price: 25,
      rating: 0,
      status: true,
      uid: "12wefdefsdss",
      variation: false,
      veg: true
  },
    {
        category_id: "e00",
        cover: "assets/imgs/pizza.jpg",
        desc: "Great in taste",
        id: "i1",
        name: "Pizza",
        price: 25,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
    {
        category_id: "e0",
        cover: "assets/imgs/salad.jpg",
        desc: "Great in taste",
        id: "i2",
        name: "Caprese Salad",
        price: 25,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: true
    },
    {
        category_id: "e00",
        cover: "assets/imgs/pasta.jpg",
        desc: "Great in taste",
        id: "i3",
        name: "Pasta",
        price: 150.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

  addresses: Address[] = [     
    {
      address: "Nomades, Genève", 
      house: "3rd Floor", 
      id: "7Kox63KlggTvV7ebRKar", 
      landmark: "House of Devs", 
      lat: 46.1936965, 
      lng: 6.1434935, 
      title: "Devs", 
      user_id: "1"
    },
    {
      address: "Home Sweet Home, Genève", 
      house: "Ground Floor", 
      id: "8Kox63KlggTvV7ebRKar", 
      landmark: "Home", 
      lat: 46.1936965, 
      lng: 6.1434935, 
      title: 
      "Work", 
      user_id: "1"
    }
  ];

  orders: Order[] = [      
    {
      address: {address: "Route de Vernier, Genève", 
      house: "A11", 
      id: "cLQdnS8YXk5HTDfM3UQC", 
      landmark: "Esplanade", 
      lat: 46.1936965, 
      lng: 6.1434935, 
      title: "house", 
      user_id: "1" }, 
      deliveryCharge: 20,
      grandTotal: 54.00,
      id: "5aG0RsPuze8NX00B7uRP",
      order: [
        {category_id: "e0", 
        cover: "assets/imgs/salad.jpg", 
        desc: "Great in taste", 
        id: "i2", 
        name: "Caprese Salad", 
        price: 20, 
        rating: 0,
         status: true, 
         uid: "12wefdefsdss", 
         variation: false, 
         veg: true, 
         quantity: 1},
      ],
      paid: "COD",  
      restaurant: 
      {
        uid: '12wefdefsdss',
        cover: 'assets/imgs/2.jpg',
        name: 'Stayfit1',
        short_name: 'stayfit1',
        cuisines: [
          'Italian',
          'Mexican'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 10
      },
      restaurant_id: "12wefdefsdss",  
      status: "created",
      time: "16 Mars, 2 04:20 AM",
      total: 52.00,
      user_id: "1"
    },
    {
      address: {address: "Route de Vernier 17, Genève", 
      house: "Work", 
      id: "cLQdnS8YXk5HTDfM3UQC", 
      landmark: "Ikea", 
      lat: 46.1936965, 
      lng: 6.1434935, 
      title: "House", 
      user_id: "1" }, 
      deliveryCharge: 20,
      grandTotal: 44.00,
      id: "5aG0RsPuze8NX00B7uR1",

      order: [
        {category_id: "e00", 
        cover: "assets/imgs/pizza.jpg", 
        desc: "Great in taste", 
        id: "i1", 
        name: "Pizza", 
        price: 12, 
        quantity: 1, 
        rating: 0, 
        status: true, 
        uid: "12wefdss", 
        variation: false, 
        veg: false},

        {category_id: "e00", 
        cover: "assets/imgs/pasta.jpg", 
        desc: "Great in taste", id: "i3", 
        name: "Pasta", 
        price: 15, 
        quantity: 2, 
        rating: 0, 
        status: true, 
        uid: "12wefdss", 
        variation: false, 
        veg: false}
      ],

      paid: "COD",  
      restaurant: {
        address: "Rue de Carouge, Genève", 
        city: "909090271", 
        closeTime: "20:00", 
        cover: "assets/imgs/1.jpg", 
        cuisines: ["Italian", "Mexican"], 
        delivery_time: 25, 
        description: "dd", 
        email: "stay@fit.com", 
        uid: "12wefdss", 
        isClose: true, 
        latitude: 46.2098114, 
        longitude: 6.1422168, 
        name: "Stayfit", 
        openTime: "08:00", 
        phone: 7867457457, 
        price: 25, rating: 0, 
        short_name: "stayfit", 
        status: "open", 
        totalRating: 0},    
      restaurant_id: "12wefdss",  
      status: "Delivered",
      time: "17 Mars, 2022 04:20 AM",
      total: 42.00,
      user_id: "1"
    },
  ];
  

  constructor() { }
}
