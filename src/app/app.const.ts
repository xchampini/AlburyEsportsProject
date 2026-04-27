import { NavRoute } from './shared/models/nav.model';

export const NavRoutes: NavRoute[] = [
  { id: 1, label: 'Home', path: '/', exactMatch: true },
  { id: 2, label: 'Events', path: '/events', exactMatch: true },
  { id: 3, label: 'Games', path: '/games', exactMatch: true },
  { id: 4, label: 'About Us', path: '/about', exactMatch: true },
  { id: 5, label: 'Shop', path: '/shop', exactMatch: true },
  { id: 6, label: 'Contact Us', path: '/contact', exactMatch: true },
];
