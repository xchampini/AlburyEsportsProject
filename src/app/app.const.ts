import { NavRoute } from './shared/models/nav.model';

export const NavRoutes: NavRoute[] = [
  { id: 1, label: 'Home', path: '/', exactMatch: true, fragment: 'home' },
  // TODO: Uncomment this when we have an events and games page
  // { id: 2, label: 'Events', path: '/events', exactMatch: true },
  // { id: 3, label: 'Games', path: '/games', exactMatch: true },
  { id: 4, label: 'About Us', path: '/', exactMatch: true, fragment: 'about' },
  { id: 5, label: 'Contact Us', path: '/', exactMatch: true, fragment: 'contact' },
  // TODO: Uncomment this when we have a standings page
  // { id: 5, label: 'Standings', path: '/standings', exactMatch: true },
  // TODO: Uncomment this to link to our shop page when we have one
  // { id: 6, label: 'Shop', path: '/shop', exactMatch: true },
];

export const ExternalLinks = {
  Discord: 'https://discord.com/invite/Ggkfa2upYj',
  Facebook: 'https://www.facebook.com/AlburyEsports',
  Instagram: 'https://www.instagram.com/albury_esports',
};

export const EmailLinks = {
  AlburyEsportsEmail: 'alburyesports@gmail.com',
};
