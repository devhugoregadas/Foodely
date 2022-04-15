import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { combineLatest, Observable, Subject, Subscription } from 'rxjs';
import { Restaurant } from 'src/app/models/restaurant.model';
import { ApiService } from 'src/app/services/api/api.service';
import { GlobalService } from 'src/app/services/global/global.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit, OnDestroy {

  @ViewChild('searchInput') sInput;
  model: any = {
    icon: 'search-outline',
    title: 'No Restaurants Found'
  };
  isLoading: boolean;
  query: any;
  restaurants: Restaurant[] = [];

  startAt = new Subject();
  endAt = new Subject();

  startObs = this.startAt.asObservable();
  endObs = this.endAt.asObservable();

  querySub: Subscription;
  location: any = {};

  constructor(
    private api: ApiService,
    public global: GlobalService
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.sInput.setFocus();
    }, 500);
    this.querySub = combineLatest(this.startObs, this.endObs).subscribe(async(val) => {
      await this.queryResults(val[0], val[1]);
    });
  }

  async queryResults(start, end) {
    try {
      this.isLoading = true;
      const snapshot = await this.api.searchRestaurantByName(start, end);
      this.restaurants = await snapshot.docs.map(doc => {
        return doc.data();
      });
      this.isLoading = false;
    } catch(e) {
      this.isLoading = false;
      this.global.errorToast();
    }
  }

  async onSearchChange(event) {
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    this.restaurants = [];
    if(this.query.length > 0) {
      this.startAt.next(this.query);
      // it is a PUA code, used to match query that start with querytext
      this.endAt.next(this.query + '\uf8ff');
    }
  }

  ngOnDestroy() {
    if(this.querySub) this.querySub.unsubscribe();
  }

}
