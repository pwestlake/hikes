import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow } from '@angular/google-maps';
import { GeolocationService } from 'src/app/services/geolocation.service'
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow, {static: false}) 
  infoWindow: MapInfoWindow;
  
  center = {lat: 0, lng: 0};
  zoom = 15;
  display?: google.maps.LatLngLiteral;

  constructor(private geolocationService: GeolocationService) { }

  ngOnInit(): void {
    this.geolocationService.getLocation().subscribe(
      location => this.center = {lat: location.lat, lng: location.lng}),
      err => console.log("Error");
  }

  
}
