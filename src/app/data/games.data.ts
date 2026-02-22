export interface GameItem {
  id: string;
  name: string;
  description: string;
  format: string;
}

export const GAMES: GameItem[] = [
  {
    id: 'rocket-league',
    name: 'Rocket League',
    description: 'High-energy car football with team-based competition and casual socials.',
    format: '2v2 and 3v3 tournaments',
  },
  {
    id: 'smash-bros',
    name: 'Super Smash Bros. Ultimate',
    description: 'Local bracket nights open to beginners and experienced players alike.',
    format: '1v1 singles, occasional doubles',
  },
  {
    id: 'community-mixers',
    name: 'Community Mixers',
    description: 'Special nights featuring party games and community-voted competitions.',
    format: 'Seasonal showcases',
  },
];
