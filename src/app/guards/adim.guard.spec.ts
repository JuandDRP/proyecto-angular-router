import { TestBed } from '@angular/core/testing';

import { AdimGuard } from './adim.guard';

describe('AdimGuard', () => {
  let guard: AdimGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdimGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
