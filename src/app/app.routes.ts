import { Routes } from '@angular/router';
import { MovieInfoComponent } from './movie-info/movie-info.component';

export const routes: Routes = [
  { path: 'movie-info', component: MovieInfoComponent },
  { path: '', redirectTo: '/movie-info', pathMatch: 'full' },
];
