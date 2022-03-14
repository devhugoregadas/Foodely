import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  cartData: any = {};
  storedData: any = {};
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
    private route: ActivatedRoute,
    private router: Router
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

  getCart() {
   return Storage.get({key: 'cart'});
  }

  async getItems() {
    this.data = {};
    this.cartData = {};
    this.storedData = {};
    let data: any = this.restaurants.filter(x => x.uid === this.id);
    this.data = data[0];
    this.categories = this.categories.filter(x => x.uid === this.id);
    this.items = this.allItems.filter(x => x.uid === this.id);
    console.log('restaurant: ', this.data);
    let cart: any = await this.getCart();
    console.log('cart: ', cart);
    if(cart?.value) {
      this.storedData = JSON.parse(cart.value);
      console.log('storedData: ', this.storedData);
      if(this.id == this.storedData.restaurant.uid && this.allItems.length > 0) {
        this.allItems.forEach((element: any) => {
          this.storedData.items.forEach(ele => {
            if(element.id != ele.id) return;
            element.quantity = ele.quantity;
          })
        })
      }
      this.cartData.totalItem = this.storedData.totalItem;
      this.cartData.totalPrice = this.storedData.totalPrice;
    }
  }

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }

  vegOnly(event) {
    console.log(event.detail.checked);
    this.items = [];
    if(event.detail.checked === true) this.items = this.allItems.filter(x => x.veg === true)
    else {this.items = this.allItems;
    console.log('items: ', this.items);}
  }

  quantityPlus(item, index) {
    try {
      console.log(this.items[index]);
      if(!this.items[index].quantity || this.items[index].quantity == 0) {
        this.items[index].quantity = 1;
        this.calculate();
      } else {
        this.items[index].quantity += 1; // this.items[index].quantity = this.items[index].quantity + 1
        this.calculate();
      }
    } catch(e) {
      console.log(e);
    }
  }

  quantityMinus(item, index) {
    if(this.items[index].quantity !== 0) {
      this.items[index].quantity -= 1; // this.items[index].quantity = this.items[index].quantity - 1
    } else {
      this.items[index].quantity = 0;
    }
    this.calculate();
  }

  calculate() {
    console.log(this.items);
    this.cartData.items = [];
    let item = this.items.filter(x => x.quantity > 0);
    this.cartData.items = item;
    this.cartData.totalPrice = 0;
    this.cartData.totalItem = 0;
    item.forEach(element => {
      this.cartData.totalItem += element.quantity;
      this.cartData.totalPrice += (parseFloat(element.price) * parseFloat(element.quantity));
    });
    this.cartData.totalPrice = parseFloat(this.cartData.totalPrice).toFixed(2);
    if(this.cartData.totalItem == 0) {
      this.cartData.totalItem = 0;
      this.cartData.totalPrice = 0;
    }
  }

  saveToCart() {
    try {
      this.cartData.restaurant = {};
      this.cartData.restaurant = this.data;
      Storage.set({
        key: 'cart',
        value: JSON.stringify(this.cartData)
      });
    } catch(e) {
      console.log(e);
    }
  }

  async viewCart() {
    if(this.cartData.items && this.cartData.items.length > 0) await this.saveToCart();
  }

}
