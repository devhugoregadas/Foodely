/* eslint-disable @angular-eslint/use-lifecycle-interface */
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  profile: any = {};
  isLoading: boolean;
  orders = [];
  ordersSub: Subscription;

  constructor(
    private orderService: OrderService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.ordersSub = this.orderService.orders.subscribe(order => {
      console.log('order data: ', order);
      if(order instanceof Array) {
        this.orders = order;
      } else {
        if(order?.delete) {
          this.orders = this.orders.filter(x => x.id !== order.id);
        } else if(order?.update) {
          const index = this.orders.findIndex(x => x.id === order.id);
          this.orders[index] = order;
        } else {
          this.orders = this.orders.concat(order);
        }
      }
    }, e => {
      console.log(e);
    });
    this.getData();
  }

  async getData() {
    this.isLoading = true;
    setTimeout(async () => {
      this.profile = {
        name: 'Hugo Regadas',
        phone: '=7676767676',
        email: 'dev.hugoregadas@gmail.com'
      };
      await this.orderService.getOrders();
      this.isLoading = false;
    }, 3000);
  }

  logout() {}

  async reorder(order) {
    console.log(order);
    const data: any = await this.cartService.getCart();
    console.log('data: ', data);
    if(data?.value) {
      this.cartService.alertClearCart(null, null, null, order);
    } else {
      this.cartService.orderToCart(order);
    }
  }

  getHelp(order) {
    console.log(order);
  }

  ngOnDestroy() {
    if(this.ordersSub) {this.ordersSub.unsubscribe();}
  }


}
