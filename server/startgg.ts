import { config } from './config.js';
import { StartggTournament } from './types.js';

const STARTGG_ENDPOINT = 'https://api.start.gg/gql/alpha';

const TOURNAMENTS_BY_OWNER_QUERY = `
  query TournamentsByOwner(
    $ownerId: ID!
    $page: Int!
    $perPage: Int!
    $upcoming: Boolean!
    $sortBy: String!
  ) {
    tournaments(query: {
      page: $page
      perPage: $perPage
      sortBy: $sortBy
      filter: {
        ownerId: $ownerId
        upcoming: $upcoming
      }
    }) {
      nodes {
        id
        name
        slug
        startAt
        endAt
        venueName
        city
        addrState
        countryCode
        events {
          id
          name
          slug
          startAt
          numEntrants
          videogame {
            name
          }
          standings(query: { page: 1, perPage: 32 }) {
            nodes {
              placement
              entrant {
                name
                participants {
                  gamerTag
                  prefix
                }
              }
            }
          }
        }
        images {
          url
          type
        }
      }
    }
  }
`;

interface GraphqlResponse<T> {
  data?: T;
  errors?: Array<{ message?: string }>;
}

export class StartggConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StartggConfigError';
  }
}

export class StartggRequestError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StartggRequestError';
  }
}

async function executeStartggQuery<T>(
  query: string,
  variables: Record<string, unknown>,
): Promise<T> {
  if (!config.startggApiToken) {
    throw new StartggConfigError('STARTGG_API_TOKEN is not configured.');
  }

  const response = await fetch(STARTGG_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${config.startggApiToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!response.ok) {
    throw new StartggRequestError(`start.gg responded with HTTP ${response.status}.`);
  }

  const payload = (await response.json()) as GraphqlResponse<T>;

  if (payload.errors?.length) {
    const message = payload.errors
      .map((error) => error.message)
      .filter(Boolean)
      .join('; ');
    throw new StartggRequestError(message || 'start.gg returned a GraphQL error.');
  }

  if (!payload.data) {
    throw new StartggRequestError('start.gg returned no data.');
  }

  return payload.data;
}

export async function fetchTournamentsByOwner(options: {
  upcoming: boolean;
  page?: number;
  perPage?: number;
}): Promise<StartggTournament[]> {
  if (!config.startggOwnerId) {
    throw new StartggConfigError('STARTGG_OWNER_ID is not configured.');
  }

  const data = await executeStartggQuery<{ tournaments?: { nodes?: StartggTournament[] | null } }>(
    TOURNAMENTS_BY_OWNER_QUERY,
    {
      ownerId: config.startggOwnerId,
      page: options.page ?? 1,
      perPage: options.perPage ?? config.tournamentsPerPage,
      upcoming: options.upcoming,
      sortBy: options.upcoming ? 'startAt asc' : 'startAt desc',
    },
  );

  return data.tournaments?.nodes ?? [];
}
