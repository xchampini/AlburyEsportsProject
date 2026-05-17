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
    description: 'Smash Bros ',
    format: '1v1 singles, occasional doubles',
  },
];
