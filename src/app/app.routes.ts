import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },
  {
    path: 'events',
    loadComponent: () => import('./pages/events/events').then((m) => m.Events),
  },
  {
    path: 'about-us',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  {
    path: 'contact-us',
    loadComponent: () => import('./pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'games',
    loadComponent: () => import('./pages/games/games').then((m) => m.Games),
  },
  {
    path: 'shop',
    loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
  },
];
