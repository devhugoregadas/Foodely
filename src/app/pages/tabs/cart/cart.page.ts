import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IonContent, NavController } from '@ionic/angular';
import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { SearchLocationComponent } from 'src/app/components/search-location/search-location.component';
import { Cart } from 'src/app/interfaces/cart.interface';
import { Address } from 'src/app/models/address.model';
import { AddressService } from 'src/app/services/address/address.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { GlobalService } from 'src/app/services/global/global.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit, OnDestroy {

  @ViewChild(IonContent, {static: false}) content: IonContent;
  urlCheck: any;
  url: any;
  model = {} as Cart;
  instruction: any;
  location = {} as Address;
  cartSub: Subscription;
  addressSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private orderService: OrderService,
    private global: GlobalService,
    private cartService: CartService,
    private addressService: AddressService
  ) { }

  async ngOnInit() {
    await this.getData();
    this.addressSub = this.addressService.addressChange.subscribe(async (address) => {
      this.location = address;
      if(this.location?.id && this.location?.id != '') {
        const radius = this.orderService.getRadius();
        const result = await this.cartService.checkCart(this.location.lat, this.location.lng, radius);
        if(result) {
          this.global.errorToast(
            'Your location is too far from the restaurant in the cart, kindly search from some other restaurant nearby.',
            3000);
          this.cartService.clearCart();
        }
      }
    });
    this.cartSub = this.cartService.cart.subscribe(cart => {
      this.model = cart;
      if(!this.model) this.location = {} as Address;
    });
  }

  async getData() {
    await this.checkUrl();
    await this.cartService.getCartData();
  }

  checkUrl() {
    let url: any = (this.router.url).split('/');
    const spliced = url.splice(url.length - 2, 2); // /tabs/cart url.length - 1 - 1
    this.urlCheck = spliced[0];
    url.push(this.urlCheck);
    this.url = url;
  }

  getPreviousUrl() {
    return this.url.join('/');
  }

  quantityPlus(index) {
    this.cartService.quantityPlus(index);
  }

  quantityMinus(index) {
    this.cartService.quantityMinus(index);
  }

  addAddress(location?) {
    let url: any;
    let navData: NavigationExtras;
    if(location) {
      location.from = 'cart';
      navData = {
        queryParams: {
          data: JSON.stringify(location)
        }
      }
    }
    if(this.urlCheck == 'tabs') url = ['/', 'tabs', 'address', 'edit-address'];
    else url = [this.router.url, 'address', 'edit-address'];
    this.router.navigate(url, navData);
  }

  async changeAddress() {
    try {
      const options = {
        component: SearchLocationComponent,
        swipeToClose: true,
        componentProps: {
          from: 'cart'
        },
        breakpoints: [0, 0.5, 0.8],
        initialBreakpoint: 0.8
      };
      const address = await this.global.createModal(options);
      if(address) {
        if(address == 'add') this.addAddress();
        await this.addressService.changeAddress(address);
      }
    } catch(e) {
    }
  }

  async validateOrder() {
    try {
      const data = {
        restaurant_id: this.model.restaurant.uid,
        instruction: this.instruction ? this.instruction : '',
        restaurant: this.model.restaurant,
        order: this.model.items,
        time: moment().format('lll'),
        address: this.location,
        status: 'Created',
        validate: 'COD'
      };
      await this.orderService.placeOrder(data);
      // clear cart
      await this.cartService.clearCart();
      this.model = {} as Cart;
      this.global.successToast('Your Order is Placed Successfully');
      this.navCtrl.navigateRoot(['tabs/account']);
    } catch(e) {
    }
  }

  ionViewWillLeave() {
    if(this.model?.items && this.model?.items.length > 0) {
      this.cartService.saveCart();
    }
  }

  ngOnDestroy() {
    if(this.addressSub) this.addressSub.unsubscribe();
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
