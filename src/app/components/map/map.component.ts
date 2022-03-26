import { Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { GoogleMapsService } from 'src/app/services/google-maps.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, AfterViewInit {

  @ViewChild('map', {static: true}) mapElementRef: ElementRef;
  googleMaps: any;
  map: any;

  constructor(
    private maps: GoogleMapsService,
    private renderer: Renderer2
    ) { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.loadMap();
  }

  async loadMap() {
    try {
      let googleMaps: any = await this.maps.loadGoogleMaps();
      this.googleMaps = googleMaps;
      const style = [
        {
          featureType: 'all',
          elementType: 'all',
          stylers: [
            { saturation: -100 }
          ]
        }
      ];
      const mapEl = this.mapElementRef.nativeElement;
      this.map = new googleMaps.Map(mapEl, {
        center: new googleMaps.LatLng(46.2167, 6.0833),
        zoom: 15,
        scaleControl: false,
        streetViewControl: false,
        zoomControl: false,
        overviewMapControl: false,
        mapTypeControl: false,
        mapTypeControlOptions: {
          mapTypeIds: [googleMaps.MapTypeId.ROADMAP, 'Foodely']
        }
      });
      const mapType = new googleMaps.StyledMapType(style, { name: 'Grayscale' });
      this.map.mapTypes.set('Foodely', mapType);
      this.map.setMapTypeId('Foodely');
      this.renderer.addClass(mapEl, 'visible');
    } catch(e) {
      console.log(e);
    }
  }

}
