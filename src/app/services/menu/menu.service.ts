import { Injectable } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(
    private api: ApiService
  ) { }

  // menu
  async addMenuItem(data) {
    try {
      const id = this.api.randomString();
      const item = new Item(
        id,
        data.restaurant_id,
        this.api.document(`categories/${data.category_id}`),
        data.cover,
        data.name,
        data.description,
        data.rating,
        data.veg,
        data.status,
        data.quantity,
        0
      );
      let itemData = Object.assign({}, item);
      delete itemData.quantity;
      const result = await this.api.setDocument(`menu/${data.restaurant_id}/allItems/${id}`, itemData);
      return true;
    } catch(e) {
      throw(e);
    }
  }

  async getRestaurantMenu(uid) {
    try {
      const query = this.api.whereQuery('status', '==', true);
      const querySnapshot = await this.api.getDocs(`menu/${uid}/allItems`, query);
      const items: Item[] = await querySnapshot.docs.map(doc => {
        let data = doc.data();
        data.id = doc.id;
        this.api.getDocByReference(data.category_id).then(docSnap => {
          if(docSnap?.exists()) {
            data.category_id = {...(docSnap.data() as any), id: docSnap.id};
          } else {
            throw('No such document exist');
          }
        });
        return data;
      });
      return items;
    } catch(e) {
      throw(e);
    }
  }
}
