import { Component } from '@angular/core';
import { GoogleMapsService } from './services/google-maps/google-maps.service';
import { LocationService } from './services/location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    googleMaps: GoogleMapsService,
    geolocation: LocationService
  ) {
    // Find position from the user
    geolocation.getCurrentLocation()
    .then(location => {
      
      googleMaps.loadGoogleMaps()
        .then(() => {
          console.log('Google Maps Ready');
          
          // Create the map with center the user position
          
        })
        .catch(err => {
          console.log(err);
        });
      });

  }



}
