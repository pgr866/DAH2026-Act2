import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./features/movie-detail/movie-detail.page').then(m => m.MovieDetailPage)
  },
];
