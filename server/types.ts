export interface AppEvent {
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
  images?: [
    {
      url?: string | null;
      type?: string | null;
    },
  ];
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

export interface StartggParticipant {
  gamerTag?: string | null;
  prefix?: string | null;
}

export interface StartggStandingNode {
  placement?: number | null;
  entrant?: {
    name?: string | null;
    participants?: StartggParticipant[] | null;
  } | null;
}

export interface StartggEvent {
  id: number | string;
  name?: string | null;
  slug?: string | null;
  startAt?: number | null;
  numEntrants?: number | null;
  videogame?: {
    name?: string | null;
  } | null;
  tournament?: {
    name?: string | null;
    venueName?: string | null;
    city?: string | null;
    addrState?: string | null;
    countryCode?: string | null;
    images?: [
      {
        url?: string | null;
        type?: string | null;
      },
    ];
  } | null;
  standings?: {
    nodes?: StartggStandingNode[] | null;
  } | null;
}

export interface StartggTournament {
  id: number | string;
  name?: string | null;
  slug?: string | null;
  startAt?: number | null;
  endAt?: number | null;
  venueName?: string | null;
  city?: string | null;
  addrState?: string | null;
  countryCode?: string | null;
  events?: StartggEvent[] | null;
  images?: [
    {
      url?: string | null;
      type?: string | null;
    },
  ];
}
