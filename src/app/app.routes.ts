import { Routes } from '@angular/router';
import { discordRedirectGuard } from './shared/discord-redirect/discord-redirect-guard';

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
    path: 'games',
    loadComponent: () => import('./pages/games/games').then((m) => m.Games),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about-us/about-us').then((m) => m.AboutUs),
  },
  // TODO: Uncomment this when we have a standings page
  // {
  //   path: 'standings',
  //   loadComponent: () => import('./pages/standings/standings').then((m) => m.Standings),
  // },
  // TODO: Uncomment this to link to our shop page when we have one
  // {
  //   path: 'shop',
  //   loadComponent: () => import('./pages/shop/shop').then((m) => m.Shop),
  // },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'discord',
    canActivate: [discordRedirectGuard],
    loadComponent: () =>
      import('./pages/discord-redirect/discord-redirect').then((m) => m.DiscordRedirect),
  },
  { path: '**', redirectTo: '' },
];
