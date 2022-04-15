import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { ApiService } from '../api/api.service';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AddressService {


  private _addresses = new BehaviorSubject<Address[]>([]);
  private _addressChange = new BehaviorSubject<Address>(null);

  get addresses() {
    return this._addresses.asObservable();
  }
  get addressChange() {
    return this._addressChange.asObservable();
  }

  constructor(private auth: AuthService, private api: ApiService) { }

  async getUid() {
    return await this.auth.getId();
  }

  async getAddresses(limit?) {
    try {
      const uid = await this.getUid();
      const queryData = this.api.limitQuery(limit);
      let querySnapshot;
      if(limit) querySnapshot = await this.api.getDocs(`address/${uid}/all`, queryData);
      else querySnapshot = await this.api.getDocs(`address/${uid}/all`);
      const allAddress = await querySnapshot.docs.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });
      this._addresses.next(allAddress);
      return allAddress;
    } catch(e) {
      throw(e);
    }
  }

  async addAddress(param) {
    try {      
      const uid = await this.getUid();
      const currentAddresses = this._addresses.value;
      const data = new Address(
        uid,
        param.title,
        param.address,
        param.landmark,
        param.house,
        param.lat,
        param.lng
      );
      let addressData = Object.assign({}, data);
      delete addressData.id;
      const response = await this.api.addDocument(`address/${uid}/all`, addressData);
      const id = await response.id;
      const address = {...addressData, id};
      currentAddresses.push(address);
      this._addresses.next(currentAddresses);
      this._addressChange.next(address);
      return address;
    } catch(e) {
      throw(e);
    }
  }

  async updateAddress(id, param, uid?) {
    try {
      if(!uid) uid = await this.getUid();
      await this.api.updateDocument(`address/${uid}/all/${id}`, param);
      let currentAddresses = this._addresses.value;
      const index = currentAddresses.findIndex(x => x.id == id);
      const data = new Address(
        uid,
        param.title,
        param.address,
        param.landmark,
        param.house,
        param.lat,
        param.lng,
        id,
      );
      currentAddresses[index] = data;
      this._addresses.next(currentAddresses);
      this._addressChange.next(data);
      return data;
    } catch(e) {
      throw(e);
    }
  }

  async deleteAddress(param) {
    try {
      const uid = await this.getUid();
      await this.api.deleteDocument(`address/${uid}/all/${param.id}`);
      let currentAddresses = this._addresses.value;
      currentAddresses = currentAddresses.filter(x => x.id != param.id);
      this._addresses.next(currentAddresses);
      return currentAddresses;
    } catch(e) {
      throw(e);
    }
  }

  changeAddress(address) {
    this._addressChange.next(address);
  }

  async checkExistAddress(location) {
    try {      
      let loc: Address = location;
      const uid = await this.getUid();
      const queryData = [
        this.api.whereQuery('lat', '==', location.lat),
        this.api.whereQuery('lng', '==', location.lng)
      ];
      const querySnapshot = await this.api.getDocs(`address/${uid}/all`, ...queryData);
      const addresses = await querySnapshot.docs.map((doc) => {
        let item = doc.data();
        item.id = doc.id;
        return item;
      });
      if(addresses?.length > 0) {
        loc = addresses[0];
      }
      this.changeAddress(loc);
      return loc;
    } catch(e) {
      throw(e);
    }
  }
 
}
