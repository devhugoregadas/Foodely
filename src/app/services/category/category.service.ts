import { Injectable } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private api: ApiService
  ) { }

  // categories
  async getRestaurantCategories(uid) {
    try {
      const query = this.api.whereQuery('uid', '==', uid);
      const querySnapshot = await this.api.getDocs('categories', query);
      const categories = await querySnapshot.docs.map(doc => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });
      return categories;
    } catch(e) {
      throw(e);
    }
  }

  async addCategories(categories, uid) {
    try {
      categories.forEach(async(element) => {
        const data = new Category(
          element,
          uid
        );
        delete data.id;
        const result = await this.api.addDocument('categories', Object.assign({}, data));
      });
      return true;
    } catch(e) {
      throw(e);
    }
  }
}
