import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { config, getConfigStatus } from './config.js';
import { getCached } from './cache.js';
import { mapEvent, mapStandings, tournamentEvents } from './mappers.js';
import { fetchTournamentsByOwner, StartggConfigError, StartggRequestError } from './startgg.js';
import { StartggEvent } from './types.js';

const app = express();

app.use(express.json());

const asyncHandler =
  (handler: RequestHandler): RequestHandler =>
  (request, response, next) => {
    Promise.resolve(handler(request, response, next)).catch(next);
  };

interface OwnerEvents {
  upcoming: StartggEvent[];
  past: StartggEvent[];
}

async function loadOwnerEvents(): Promise<OwnerEvents> {
  if (!config.startggOwnerId) {
    return {
      upcoming: [],
      past: [],
    };
  }

  const [upcomingTournaments, pastTournaments] = await Promise.all([
    fetchTournamentsByOwner({ upcoming: true }),
    fetchTournamentsByOwner({ upcoming: false }),
  ]);

  return {
    upcoming: tournamentEvents(upcomingTournaments, 'upcoming'),
    past: tournamentEvents(pastTournaments, 'past'),
  };
}

app.get('/api/health', (_request, response) => {
  response.json({
    ok: true,
    config: getConfigStatus(),
  });
});

app.get(
  '/api/events',
  asyncHandler(async (_request, response) => {
    const ownerEvents = await getCached('owner-events', config.cacheTtlMs, loadOwnerEvents);
    const upcomingEvents = ownerEvents.upcoming.map((event, index) =>
      mapEvent(event, index, 'upcoming'),
    );
    const pastEvents = ownerEvents.past.map((event, index) => mapEvent(event, index, 'past'));

    response.json({
      events: [...upcomingEvents, ...pastEvents],
      upcomingEvents,
      pastEvents,
    });
  }),
);

app.get(
  '/api/standings',
  asyncHandler(async (_request, response) => {
    const ownerEvents = await getCached('owner-events', config.cacheTtlMs, loadOwnerEvents);
    const events = ownerEvents.past.length ? ownerEvents.past : ownerEvents.upcoming;
    response.json(mapStandings(events));
  }),
);

const errorHandler: ErrorRequestHandler = (error, _request, response, _next) => {
  if (error instanceof StartggConfigError) {
    response.status(503).json({
      error: 'start.gg is not configured on the server.',
    });
    return;
  }

  if (error instanceof StartggRequestError) {
    response.status(502).json({
      error: 'start.gg request failed.',
    });
    return;
  }

  console.error(error);
  response.status(500).json({
    error: 'Unexpected server error.',
  });
};

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`API server listening on http://localhost:${config.port}`);
});
