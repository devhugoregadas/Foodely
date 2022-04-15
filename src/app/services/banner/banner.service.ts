import { Injectable } from '@angular/core';
import { Banner } from 'src/app/models/banner.model';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  constructor(
    private api: ApiService
  ) { }  

  // banner apis
  async addBanner(data) {
    try {
      const bannerData = new Banner(
        data.banner, 
        data.status
      );
      let banner = Object.assign({}, bannerData);
      delete banner.res_id;
      delete banner.id;
      const response = await this.api.addDocument('banners', banner);
      return true;
    } catch(e) {
      throw(e);
    }
  }

  async getBanners() {
    try {
      const querySnapshot = await this.api.getDocs('banners');
      const banners = await querySnapshot.docs.map(doc => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });
      return banners;
    } catch(e) {
      throw(e);
    }
  }
}
