import { NavRoute } from './shared/models/nav.model';

export const NavRoutes: NavRoute[] = [
  { id: 1, label: 'Home', path: '/', exactMatch: true },
  { id: 2, label: 'Events', path: '/events', exactMatch: true },
  { id: 3, label: 'Games', path: '/games', exactMatch: true },
  { id: 4, label: 'About Us', path: '/about', exactMatch: true },
  // TODO: Uncomment this when we have a standings page
  // { id: 5, label: 'Standings', path: '/standings', exactMatch: true },
  // TODO: Uncomment this to link to our shop page when we have one
  // { id: 6, label: 'Shop', path: '/shop', exactMatch: true },
  { id: 7, label: 'Contact Us', path: '/contact', exactMatch: true },
];

export const ExternalLinks = {
  discord: 'https://discord.com/invite/Ggkfa2upYj',
  facebook: 'https://www.facebook.com/AlburyEsports',
  instagram: 'https://www.instagram.com/albury_esports',
};
