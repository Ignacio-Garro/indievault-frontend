import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { GalleriaModule } from 'primeng/galleria';
import { PrimeNGConfig, OverlayOptions, ResponsiveOverlayDirectionType } from 'primeng/api';
import {TagModule} from "primeng/tag";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ButtonModule, CarouselModule, GalleriaModule, TagModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  products: Product[] = [
    {
      name: 'movie 1',
      image: 'movie1.jpg',
      inventoryStatus: 'In Stock',
      price: 50
    },
    {
      name: 'movie 2',
      image: 'movie2.jpg',
      inventoryStatus: 'Out of Stock',
      price: 70
    },
    {
      name: 'movie 3',
      image: 'movie3.jpg',
      inventoryStatus: 'Out of Stock',
      price: 80
    },
    {
      name: 'movie 4',
      image: 'movie4.jpg',
      inventoryStatus: 'Out of Stock',
      price: 80
    },
    {
      name: 'movie 5',
      image: 'movie5.jpg',
      inventoryStatus: 'Out of Stock',
      price: 80
    },
    // Add more products as needed
  ];

  responsiveOptions: any[] = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
  ]
}

export interface Product  {
  name: string;
  image: string;
  inventoryStatus: string;
  price: number;
}





