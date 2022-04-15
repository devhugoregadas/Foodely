import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Restaurant } from 'src/app/models/restaurant.model';
import { Category } from 'src/app/models/category.model';
import { Item } from 'src/app/models/item.model';
import { GlobalService } from 'src/app/services/global/global.service';
import { Cart } from 'src/app/interfaces/cart.interface';
import { RestaurantService } from 'src/app/services/restaurant/restaurant.service';
import { CategoryService } from 'src/app/services/category/category.service';
import { MenuService } from 'src/app/services/menu/menu.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit, OnDestroy {

  id: any;
  data = {} as Restaurant;
  items: Item[] = [];
  veg: boolean = false;
  isLoading: boolean;
  cartData = {} as Cart;
  storedData = {} as Cart;
  model = {
    icon: 'fast-food-outline',
    title: 'No Menu Available'
  };
  categories: Category[] = [];
  allItems: Item[] = [];
  cartSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    private cartService: CartService,
    private global: GlobalService,
    private restaurantService: RestaurantService,
    private menuService: MenuService,
    private categoryService: CategoryService
  ) { }

  ngOnInit() {    
    const id = this.route.snapshot.paramMap.get('restaurantId');
    if(!id) {
      this.navCtrl.back();
      return;
    } 
    this.id = id;
    this.cartSub = this.cartService.cart.subscribe(cart => {
      this.cartData = {} as Cart;
      this.storedData = {} as Cart;
      if(cart && cart?.totalItem > 0) {
        this.storedData = cart;
        this.cartData.totalItem = this.storedData.totalItem;
        if(cart?.restaurant?.uid === this.id) {
          this.allItems.forEach(element => {
            let qty = false;
            cart.items.forEach(element2 => {
              if(element.id != element2.id) {
                return;
              }
              element.quantity = element2.quantity;
              qty = true;              
            });
            if(!qty && element?.quantity) element.quantity = 0;
          });
          this.cartData.items = this.allItems.filter(x => x.quantity > 0);
          if(this.veg == true) this.items = this.allItems.filter(x => x.veg === true);
          else this.items = [...this.allItems];
        } else {
          this.allItems.forEach(element => {            
              element.quantity = 0;
          });
          if(this.veg == true) this.items = this.allItems.filter(x => x.veg === true);
          else this.items = [...this.allItems];
        }
      } else {
        this.allItems.forEach(element => {            
          element.quantity = 0;
        });
        if(this.veg == true) this.items = this.allItems.filter(x => x.veg === true);
        else this.items = [...this.allItems];
      }
    });    
    this.getItems();
  }

  async getItems() {
    try {      
      this.isLoading = true;
      this.data = {} as Restaurant;
      this.cartData = {} as Cart;
      this.storedData = {} as Cart;
      this.data = await this.restaurantService.getRestaurantById(this.id);
      this.categories = await this.categoryService.getRestaurantCategories(this.id);
      this.allItems = await this.menuService.getRestaurantMenu(this.id);
      this.items = [...this.allItems];
      await this.cartService.getCartData();
      this.isLoading = false;
    } catch(e) {
      this.isLoading = false;
      this.global.errorToast();
    }
  }

  vegOnly(event) {
    this.items = [];
    if(event.detail.checked == true) this.items = this.allItems.filter(x => x.veg === true);
    else this.items = this.allItems;
  }

  quantityPlus(item) {
    const index = this.allItems.findIndex(x => x.id === item.id);
    if(!this.allItems[index].quantity || this.allItems[index].quantity == 0) {
      if(!this.storedData.restaurant || (this.storedData.restaurant && this.storedData.restaurant.uid == this.id)) {
        this.cartService.quantityPlus(index, this.allItems, this.data);
      } else {
        // alert for clear cart
        this.cartService.alertClearCart(index, this.allItems, this.data);
      }
    } else {
      this.cartService.quantityPlus(index, this.allItems, this.data);
    }  
  }

  quantityMinus(item) {
    const index = this.allItems.findIndex(x => x.id === item.id);
    this.cartService.quantityMinus(index, this.allItems);
  }

  saveToCart() {
    try {
      this.cartData.restaurant = {} as Restaurant;
      this.cartData.restaurant = this.data;
      this.cartService.saveCart();
    } catch(e) {
    }
  }

  async viewCart() {
    if(this.cartData.items && this.cartData.items.length > 0) await this.saveToCart();
    this.router.navigate([this.router.url + '/cart']);
  }

  checkItemCategory(id) {
    const item = this.items.find(x => x.category_id.id == id);
    if(item) return true;
    return false;
  }

  async ionViewWillLeave() {
    if(this.cartData?.items && this.cartData?.items.length > 0) await this.saveToCart();
  }

  ngOnDestroy() {
    if(this.cartSub) this.cartSub.unsubscribe();
  }

}
