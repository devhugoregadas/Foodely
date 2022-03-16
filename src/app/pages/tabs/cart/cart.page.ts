import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';
import { IonContent } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  urlCheck: any;
  url: any;
  model: any = {};
  deliveryCharge = 20;
  instruction: any;
  location: any = {};

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.checkUrl();
    this.getModel();
  }

  getCart() {
   return Storage.get({key: 'cart'});
  }

  async getModel() {
    const data: any = await this.getCart();
    this.location = {
      lat: 28.653831,
      lng: 77.188257,
      address: 'Vernier, Genève'
    };
    if(data?.value) {
      this.model = await JSON.parse(data.value);
      console.log(this.model);
      this.calculate();
    }
  }

  async calculate() {
    const item = this.model.items.filter(x => x.quantity > 0);
    this.model.items = item;
    this.model.totalPrice = 0;
    this.model.totalItem = 0;
    this.model.deliveryCharge = 0;
    this.model.grandTotal = 0;
    item.forEach(element => {
      this.model.totalItem += element.quantity;
      this.model.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.model.deliveryCharge = this.deliveryCharge;
    this.model.totalPrice = parseFloat(this.model.totalPrice).toFixed(2);
    this.model.grandTotal = (parseFloat(this.model.totalPrice) + parseFloat(this.model.deliveryCharge)).toFixed(2);
    if(this.model.totalItem === 0) {
      this.model.totalItem = 0;
      this.model.totalPrice = 0;
      this.model.grandTotal = 0;
      await this.clearCart();
      this.model = null;
    }
    console.log('cart: ', this.model);
  }

  clearCart() {
    return Storage.remove({key: 'cart'});
  }

  checkUrl() {
    const url: any = (this.router.url).split('/');
    console.log('url: ', url);
    const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1
    this.urlCheck = spliced[0];
    url.push(this.urlCheck);
    this.url = url;
  }

  getPreviousUrl() {
    return this.url.join('/');
  }

  quantityPlus(index) {
    try {
      console.log(this.model.items[index]);
      if(!this.model.items[index].quantity || this.model.items[index].quantity === 0) {
        this.model.items[index].quantity = 1;
        this.calculate();
      } else {
        this.model.items[index].quantity += 1; // this.model.items[index].quantity = this.model.items[index].quantity + 1
        this.calculate();
      }
    } catch(e) {}
  }

  quantityMinus(index) {
    if(this.model.items[index].quantity !== 0) {
      this.model.items[index].quantity -= 1; // this.model.items[index].quantity = this.model.items[index].quantity - 1
    } else {
      this.model.items[index].quantity = 0;
    }
    this.calculate();
  }

  addAddress() {}

  changeAddress() {}

  makePayment() {
    try {
      const data = {
        restaurantId: this.model.restaurant.uid,
        res: this.model.restaurant,
        order: JSON.stringify(this.model.items),
        time: moment().format('lll'),
        address: this.location,
        total: this.model.totalPrice,
        grandTotal: this.model.grandTotal,
        deliveryCharge: this.deliveryCharge,
        status: 'Created',
        paid: 'COD'
      };
    } catch(e) {
    }
  }

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

}
