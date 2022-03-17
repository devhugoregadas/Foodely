/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  profile: any = {};
  isLoading: boolean;
  orders = [];

  constructor() { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.isLoading = true;
    setTimeout(() => {
      this.profile = {
        name: 'Hugo Regadas',
        phone: '0767676767',
        email: 'dev.hugoregadas@gmail.com'
      };
      this.orders = [
        {
          address: {address: 'Chemin de Esplanade 69, 1214 Vernier, Genève', house: 'dsgd', id: 'cLQdnS8YXk5HTDfM3UQC', landmark: 'fdgs', lat: 46.2013573, lng: 6.1575619, title: 'yui', userId: 'UA5JWxgjDOYgfXe92H0pFHwulTz2' },
          deliveryCharge: 20,
          grandTotal: '54.00',
          id: '5aG0RsPuze8NX00B7uRP',
          order: [
            {categoryId: 'e10', cover: 'assets/imgs/baha.jpg', desc: 'Great in taste', id: 'i32', name: 'Bahamas', price: 27, quantity: 1, rating: 0, status: true, uid: 'r5', variation: false, veg: false},
            {categoryId: 'e10', cover: 'assets/imgs/mofo.jpg', desc: 'Great in taste', id: 'i33', name: 'Mofongo', price: 25, quantity: 1, rating: 0, status: true, uid: 'r5',variation: false, veg: true}
          ],
          paid: 'COD',
          restaurant: {address: '7 Oak House, Genève',  city: '909090567', closeTime: '21:00', cover: '', cuisines: ['Caribbean food', 'North Indian', 'Vietnamese'], deliveryTime: 25, description: 'dd', email: 'DosaPlaza@gmail.com', latitude: 46.2013573, longitude: 6.1575619, id: 'r5', isClose: true, name: 'DosaPlaza', openTime: '07:00', phone: 7619563867, price: 27, rating: 4.7, shortName: 'stayfit', status: 'open', totalRating: 13},
          restaurantId: 'r5',
          status: 'created',
          time: 'Mar 13, 2022 11:44 AM',
          total: '52.00',
          userId: '1'
        },
        {
          address: {address: '8 Oak House, Genève', house: 'dsgd', id: 'cLQdnS8YXk5HTDfM3UQC', landmark: 'fdgs', lat: 46.2013273, lng: 6.1575319, title: 'yui', userId: 'UA5JWxgjDOYgfXe92H0pFHwulTz2' },
          deliveryCharge: 20,
          grandTotal: '44.00',
          id: '5aG0RsPuze8NX00B7uR1',
          order: [
            {categoryId: 'e00', cover: 'assets/imgs/pizza.jpg', desc: 'Great in taste', id: 'i1', name: 'Pizza', price: 120, quantity: 1, rating: 0, status: true, uid: 'r1', variation: false, veg: false},
            {categoryId: 'e00', cover: 'assets/imgs/pasta.jpg', desc: 'Great in taste', id: 'i3', name: 'Pasta', price: 150, quantity: 2, rating: 0, status: true, uid: 'r1', variation: false, veg: false}
          ],
          paid: 'COD',
          restaurant: {address: '9 Oak House, Genève', city: '909090271', closeTime: '20:00', cover: 'assets/imgs/restaurant-1.jpg', cuisines: ['Italian', 'Mexican'], deliveryTime: 25, description: 'dd', email: 'stay@fit.com', id: 'r1', isClose: true, latitude: 46.2013573, longitude: 6.1575619, name: 'Stayfit', openTime: '08:00', phone: 786745745, price: 25, rating: 0, shortName: 'stayfit', status: 'open', totalRating: 0},    restaurantId: 'r1',
          status: 'Delivered',
          time: 'Mar 13, 2022 11:44 AM',
          total: '42.00',
          userId: '1'
        },
      ];
      this.isLoading = false;
    }, 3000);
  }

  logout() {}

  reorder(order) {
    console.log(order);
  }

  getHelp(order) {
    console.log(order);
  }

}
