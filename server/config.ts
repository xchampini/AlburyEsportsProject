import 'dotenv/config';

const DEFAULT_CACHE_TTL_SECONDS = 300;
const DEFAULT_TOURNAMENTS_PER_PAGE = 10;

function readNumber(value: string | undefined, fallback: number): number {
  if (!value) {
    return fallback;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

export const config = {
  port: readNumber(process.env['PORT'], 3000),
  startggApiToken: process.env['STARTGG_API_TOKEN'] ?? '',
  startggOwnerId: process.env['STARTGG_OWNER_ID'] ?? '',
  cacheTtlMs: readNumber(process.env['STARTGG_CACHE_TTL_SECONDS'], DEFAULT_CACHE_TTL_SECONDS) * 1000,
  tournamentsPerPage: readNumber(
    process.env['STARTGG_TOURNAMENTS_PER_PAGE'],
    DEFAULT_TOURNAMENTS_PER_PAGE,
  ),
};

export function getConfigStatus() {
  return {
    hasStartggApiToken: Boolean(config.startggApiToken),
    hasStartggOwnerId: Boolean(config.startggOwnerId),
    cacheTtlSeconds: Math.round(config.cacheTtlMs / 1000),
    tournamentsPerPage: config.tournamentsPerPage,
  };
}
