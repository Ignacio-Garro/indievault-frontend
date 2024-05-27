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
  products: MovieProduct[] = [
    {
      name: 'movie 1',
      image: 'movie1.jpg',
      inventoryStatus: 'In Stock',
      imageUrl: 'youtube.com'
    },
    {
      name: 'movie 2',
      image: 'movie2.jpg',
      inventoryStatus: 'Out of Stock',
      imageUrl: 'google.com'
    },
    {
      name: 'movie 3',
      image: 'movie3.jpg',
      inventoryStatus: 'Out of Stock',
      imageUrl: 'google.com'
    },
    {
      name: 'movie 4',
      image: 'movie4.jpg',
      inventoryStatus: 'Out of Stock',
      imageUrl: 'google.com'
    },
    {
      name: 'movie 5',
      image: 'movie5.jpg',
      inventoryStatus: 'Out of Stock',
      imageUrl: 'google.com'
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

export interface MovieProduct {
  name: string;
  image: string;
  inventoryStatus: string;
  imageUrl: string;
}

export interface ProfileInfo  {
  name: string;
  description: string;
  profileImage: string;
  //ListOfLikedMovies: MovieProduct[];
}





