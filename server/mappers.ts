import {
  AppEvent,
  StandingRow,
  StandingsResponse,
  StartggEvent,
  StartggTournament,
} from './types.js';

const DATE_FORMATTER = new Intl.DateTimeFormat('en-AU', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Australia/Sydney',
});

const TIME_FORMATTER = new Intl.DateTimeFormat('en-AU', {
  hour: 'numeric',
  minute: '2-digit',
  timeZone: 'Australia/Sydney',
});

function formatDate(timestamp?: number | null): string {
  return timestamp ? DATE_FORMATTER.format(new Date(timestamp * 1000)) : 'Date TBA';
}

function formatTime(timestamp?: number | null): string | undefined {
  return timestamp ? TIME_FORMATTER.format(new Date(timestamp * 1000)) : undefined;
}

function formatLocation(event: StartggEvent): string | undefined {
  const parts = [
    event.tournament?.venueName,
    event.tournament?.city,
    event.tournament?.addrState,
    event.tournament?.countryCode,
  ].filter(Boolean);

  return parts.length ? parts.join(', ') : undefined;
}

export function tournamentEvents(
  tournaments: StartggTournament[],
  status: 'upcoming' | 'past',
): StartggEvent[] {
  return tournaments.flatMap((tournament) => {
    return (tournament.events ?? []).map((event) => ({
      ...event,
      startAt: event.startAt ?? tournament.startAt,
      tournament: {
        name: tournament.name,
        venueName: tournament.venueName,
        city: tournament.city,
        addrState: tournament.addrState,
        countryCode: tournament.countryCode,
        images: tournament.images,
      },
      status,
    }));
  });
}

export function mapEvent(
  event: StartggEvent,
  index: number,
  status: 'upcoming' | 'past',
): AppEvent {
  const bracketUrl = event.slug ? `https://www.start.gg/${event.slug}` : undefined;
  const entrantText =
    typeof event.numEntrants === 'number' ? `${event.numEntrants} entrants registered.` : '';

  return {
    id: String(event.id),
    title: event.name ?? 'Untitled event',
    dateText: formatDate(event.startAt),
    timeText: formatTime(event.startAt),
    locationText: formatLocation(event),
    game: event.videogame?.name ?? 'Game TBA',
    description: entrantText || event.tournament?.name || 'Tournament details coming soon.',
    bracketUrl,
    isFeatured: index === 0,
    status,
    images: event.tournament?.images,
  };
}

export function mapStandings(events: StartggEvent[]): StandingsResponse {
  const rows = events.flatMap((event): StandingRow[] => {
    return (event.standings?.nodes ?? [])
      .filter((node) => typeof node?.placement === 'number' && node.entrant)
      .map((node) => ({
        placement: node.placement as number,
        entrantName: node.entrant?.name ?? 'Unknown entrant',
        playerNames:
          node.entrant?.participants
            ?.map((participant) => participant.gamerTag)
            .filter((name): name is string => Boolean(name)) ?? [],
        eventName: event.name ?? 'Untitled event',
      }));
  });

  return {
    eventName: events.length === 1 ? (events[0]?.name ?? 'Standings') : 'Standings',
    updatedAt: new Date().toISOString(),
    rows,
  };
}
