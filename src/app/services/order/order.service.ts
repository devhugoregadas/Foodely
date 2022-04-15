import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  uid: string;

  private _orders = new BehaviorSubject<Order[]>([]);

  get orders() {
    return this._orders.asObservable();
  }

  constructor(private auth: AuthService, private api: ApiService) { }

  getRadius() {
    return this.api.radius;
  }

  async getUid() {
    if(!this.uid) return await this.auth.getId();
    else return this.uid;
  }

  async getOrders() {
    try {
      this.uid = await this.getUid();
      const querySnapshot = await this.api.getDocs('orders');
      const orders = await querySnapshot.docs.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        item.order = JSON.parse(item.order);
        this.api.getDocByReference(item.restaurant).then(docRestaurantSnap => {
          if(docRestaurantSnap?.exists()) {
            item.restaurant = docRestaurantSnap.data();
          } else {
            throw('No restaurant document exists');
          }
        });
        return item;
      });
      this._orders.next(orders);
      return orders;
    } catch(e) {
      throw(e);
    }
  }

  async placeOrder(param) {
    try {
      const uid = await this.getUid();
      const order = JSON.stringify(param.order);
      const restaurant = this.api.document(`restaurants/${param.restaurant_id}`);
      const user = this.api.document(`users/${uid}`);
      const data = {...param, address: Object.assign({}, param.address), order, restaurant, uid, user};
      const orderRef = await this.api.addDocument('orders', data);
      const order_id = await orderRef.id;
      let currentOrders: Order[] = [];
      currentOrders.push(new Order(
        param.address,
        param.restaurant,
        user,
        param.restaurant_id,
        param.order,
        param.total,
        param.status,
        param.time,
        param.validate,    
        order_id,
        uid,
        param.instruction    
      ));
      currentOrders = currentOrders.concat(this._orders.value);
      this._orders.next(currentOrders);
      return currentOrders;
    } catch(e) {
      throw(e);
    }
  }

}
