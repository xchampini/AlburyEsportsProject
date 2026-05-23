export interface ApiEvent {
  id: string;
  title: string;
  dateText: string;
  timeText?: string;
  locationText?: string;
  game: string;
  description: string;
  bracketUrl?: string;
  isFeatured?: boolean;
  status: 'upcoming' | 'past';
}

export interface EventsResponse {
  events: ApiEvent[];
  upcomingEvents: ApiEvent[];
  pastEvents: ApiEvent[];
}

export interface StandingRow {
  placement: number;
  entrantName: string;
  playerNames: string[];
  eventName: string;
}

export interface StandingsResponse {
  eventName: string;
  updatedAt: string;
  rows: StandingRow[];
}
