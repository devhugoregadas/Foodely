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
      address: 'La Petite Vendée, Petit-Lancy',
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
      address: 'La Petite Vendée, Petit-Lancy',
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
      address: 'La Petite Vendée, Petit-Lancy',
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
      price: 20,
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
        price: 12,
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
        price: 20,
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
        price: 15.50,
        rating: 0,
        status: true,
        uid: "12wefdss",
        variation: false,
        veg: false
    },
  ];

  addresses: Address[] = [     
    {
      address: "Chemin de l'Esplanade, 1214 Vernier", 
      house: "Ground Floor", 
      id: "7Kox63KlggTvV7ebRKar", 
      landmark: "La Petite Vendée", 
      lat: 46.217342, 
      lng: 6.0891297, 
      title: "Home", 
      user_id: "1"},
    {address: "Route de Vernier, Genève", house: "Ground Floor", id: "8Kox63KlggTvV7ebRKar", landmark: "Ikea", lat: 46.217342, lng: 6.0891297, title: "Work", user_id: "1"}
  ];

  orders: Order[] = [      
    {
      address: {address: "Chemin du Canada, Vernier", house: "1st Floor", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "Canada", lat: 46.2167, lng: 6.0667, title: "yui", user_id: "1" }, 
      deliveryCharge: 20,
      grandTotal: 54.00,
      id: "5aG0RsPuze8NX00B7uRP",
      order: [
        {category_id: "e0", cover: "assets/imgs/salad.jpg", desc: "Great in taste", id: "i2", name: "Caprese Salad", price: 20, rating: 0, status: true, uid: "12wefdefsdss", variation: false, veg: true, quantity: 1},
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
      time: "16 Mars, 2022 11:00",
      total: 52.00,
      user_id: "1"
    },
    {
      address: {address: "Chemin du Canada, Vernier", house: "1st Floor", id: "cLQdnS8YXk5HTDfM3UQC", landmark: "Canada", lat: 46.2167, lng: 6.0667, title: "yui", user_id: "1" }, 
      deliveryCharge: 20,
      grandTotal: 44.00,
      id: "5aG0RsPuze8NX00B7uR1",
      order: [
        {category_id: "e00", cover: "assets/imgs/pizza.jpg", desc: "Great in taste", id: "i1", name: "Pizza", price: 12, quantity: 1, rating: 0, status: true, uid: "12wefdss", variation: false, veg: false},
        {category_id: "e00", cover: "assets/imgs/pasta.jpg", desc: "Great in taste", id: "i3", name: "Pasta", price: 15, quantity: 2, rating: 0, status: true, uid: "12wefdss", variation: false, veg: false}
      ],
      paid: "COD",  
      restaurant: {address: "Route de Versoix, Genève", city: "909090271", closeTime: "20:00", 
      cover: "assets/imgs/1.jpg", cuisines: ["Italian", "Mexican"], delivery_time: 25, description: "dd", 
      email: "stay@fit.com", uid: "12wefdss", 
      isClose: true, latitude: 46.2833, longitude: 6.1667, name: "Stayfit", openTime: "08:00", phone: 786745745, price: 25, rating: 0, short_name: "stayfit", status: "open", totalRating: 0},    
      restaurant_id: "12wefdss",  
      status: "Delivered",
      time: "17 Mars, 2022 12:00",
      total: 42.00,
      user_id: "1"
    },
  ];
  

  constructor() { }
}
