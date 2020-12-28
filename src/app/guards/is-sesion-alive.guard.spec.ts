import { TestBed } from '@angular/core/testing';

import { IsSesionAliveGuard } from './is-sesion-alive.guard';

describe('IsSesionAliveGuard', () => {
  let guard: IsSesionAliveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSesionAliveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
