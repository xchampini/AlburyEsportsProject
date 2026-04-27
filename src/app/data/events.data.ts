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
    id: 'rocket-league-monthly',
    title: 'Rocket League Monthly Rumble',
    dateText: 'Last Sunday of every month',
    timeText: '6:30 PM',
    locationText: 'Albury Community Hall',
    game: 'Rocket League',
    description:
      'A casual 2v2 tournament night with rotating maps, shoutcasting, and prizes for top teams.',
    bracketUrl: 'https://www.start.gg/',
    ticketUrl: 'https://example.com/tickets/rocket-league',
    isFeatured: true,
  },
  {
    id: 'smash-weekly',
    title: 'Smash Bros Weeknight Bash',
    dateText: 'Every second Friday',
    timeText: '7:00 PM',
    locationText: 'Albury Library Activity Space',
    game: 'Super Smash Bros. Ultimate',
    description:
      'Friendly local bracket with beginner and open pools. Bring your controller and join the fun.',
    bracketUrl: 'https://www.start.gg/',
    isFeatured: true,
  },
  {
    id: 'annual-gaming-festival',
    title: 'Albury Annual Gaming Festival',
    dateText: 'October 2026',
    locationText: 'Albury Showgrounds',
    game: 'Multi-Game Event',
    description:
      'Our biggest event of the year with multiple tournament stations, casual freeplay, and community showcases.',
    ticketUrl: 'https://example.com/tickets/festival',
  },
];
