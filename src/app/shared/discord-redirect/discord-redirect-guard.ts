import { CanActivateFn } from '@angular/router';

export const discordRedirectGuard: CanActivateFn = (route, state) => {
  // This sets the user's browser's location to the discord invite
  window.location.href = 'https://discord.com/invite/Ggkfa2upYj';
  return false;
};
