import { TestBed, async, inject } from '@angular/core/testing';

import { RequireMeGuard } from './require-me.guard';

describe('RequireMeGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireMeGuard]
    });
  });

  it('should ...', inject([RequireMeGuard], (guard: RequireMeGuard) => {
    expect(guard).toBeTruthy();
  }));
});
