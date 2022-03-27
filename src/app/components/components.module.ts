import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { IonicModule } from '@ionic/angular';
import { LoadingRestaurantComponent } from './loading-restaurant/loading-restaurant.component';
import { EmptyScreenComponent } from './empty-screen/empty-screen.component';
import { SearchLocationComponent } from './search-location/search-location.component';

export const components = [
  RestaurantComponent,
  LoadingRestaurantComponent,
  EmptyScreenComponent,
  SearchLocationComponent
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: components,
  // only those components not defined in template
  entryComponents: [
    SearchLocationComponent
  ]
})
export class ComponentsModule { }
