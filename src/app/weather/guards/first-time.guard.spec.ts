import { TestBed } from '@angular/core/testing';

import { FirstTimeGuard } from './first-time.guard';

describe('FirstTimeGuard', () => {
  let guard: FirstTimeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(FirstTimeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
