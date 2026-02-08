import { NavRoute } from './shared/models/nav.model';

export const NavRoutes: NavRoute[] = [
  { id: 1, label: 'Home', path: '', exactMatch: '' },
  { id: 2, label: 'Events', path: '/events', exactMatch: '/events' },
  { id: 3, label: 'Shop', path: '/shop', exactMatch: '/shop' },
  { id: 4, label: 'Contact Us', path: '/contact-us', exactMatch: '/contact' },
  { id: 5, label: 'Games', path: '/games', exactMatch: '/games' },
  { id: 6, label: 'About Us', path: '/about-us', exactMatch: '/aboutus' },
];
