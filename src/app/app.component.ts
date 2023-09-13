import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fairhouse';
  housingLocationList: HousingLocation[] = [
    {
      name: "Moradia com 4 quartos, segura e confortável",
      city: "Laranjeiras do Sul",
      state: "Paraná",
      photo: "../assets/housing-1.jpg",
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: "A113 Casa com 3 quartos, bem localizada",
      city: "Dois Vizinhos",
      state: "Paraná",
      photo: "../assets/housing-2.jpg",
      availableUnits: 3,
      wifi: false,
      laundry: true,
    },
    {
      name: "Camas aquecidas Suporte Habitacional",
      city: "Joinville",
      state: "SC",
      photo: "../assets/housing-3.jpg",
      availableUnits: 1,
      wifi: false,
      laundry: false,
    }
  ];

  selectedLocation: HousingLocation | undefined;

  updateSelectedLocation(location: HousingLocation) { 
    this.selectedLocation = location;
  } searchHousingLocations() {}


}
