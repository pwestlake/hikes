import { Injectable } from '@angular/core';
import { LatLng } from 'src/app/data/latlng'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getLocation(): Observable<LatLng> {
    return new Observable(observer => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const latlng: LatLng  = {lat: position.coords.latitude, lng: position.coords.longitude};
          observer.next(latlng);
          observer.complete();
        });
      } else {
        observer.error("Location not enabled");
      }
    });
    
  }
}
