export interface EventItem {
  id: string;
  title: string;
  dateText: string;
  timeText?: string;
  locationText?: string;
  game: string;
  description: string;
  bracketUrl?: string;
  ticketUrl?: string;
  isFeatured?: boolean;
}

export const EVENTS: EventItem[] = [
  {
    id: 'smash-monthly',
    title: 'Smash Champions',
    dateText: 'Last Saturday of every Month',
    timeText: '12:30 PM',
    locationText: 'Someplace',
    game: 'Super Smash Bros. Ultimate',
    description: 'Friendly local bracket.',
    bracketUrl: 'https://www.start.gg/',
    isFeatured: true,
  },
  {
    id: 'riverina-gaming-festival',
    title: 'Riverina Gaming Festival',
    dateText: 'February 2026',
    locationText: 'The Cube',
    game: 'Multi-Game Event',
    description:
      'Our biggest event of the year with multiple tournament stations, casual freeplay, and community showcases.',
    ticketUrl: '',
  },
];
