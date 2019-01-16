import { TestBed } from '@angular/core/testing';

import { NotAuthGuard } from './notAuth.guard';

describe('NotAuth.GuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotAuthGuard = TestBed.get(NotAuthGuard);
    expect(service).toBeTruthy();
  });
});
