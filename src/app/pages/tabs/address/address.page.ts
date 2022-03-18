/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  isLoading: boolean;
  addresses: any[] = [];

  constructor(
    private global: GlobalService,
  ) { }

  ngOnInit() {
    this.getAddresses();
  }

  getAddresses() {
    this.isLoading = true;
    setTimeout(() => {
      this.addresses = [
        {address: 'Rue de la Chapelle 8, Genève', house: 'Ground Floor', id: '7Kox63KlggTvV7ebRKar', landmark: '8 Oak', lat: 46.2013573, lng: 6.1575619, title: '8 Oak', userId: '1'},
        {address: '33, Quai des Bergues, Genève', house: 'Ground Floor', id: '8Kox63KlggTvV7ebRKar', landmark: 'Four Seasons', lat: 46.2069972, lng: 6.1469218, title: 'Four Seasons', userId: '1'}
      ];
      this.isLoading = false;
      this.global.showLoader();
      this.global.setLoader();
    }, 3000);
  }

  getIcon(title) {
    return this.global.getIcon(title);
    }

    editAddress(address) {}

    deleteAddress(address) {}
  }



