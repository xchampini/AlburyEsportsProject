import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { discordRedirectGuardGuard } from './discord-redirect-guard-guard';

describe('discordRedirectGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => discordRedirectGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
