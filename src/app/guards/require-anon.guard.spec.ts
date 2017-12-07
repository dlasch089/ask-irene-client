import { TestBed, async, inject } from '@angular/core/testing';

import { RequireAnonGuard } from './require-anon.guard';

describe('RequireAnonGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAnonGuard]
    });
  });

  it('should ...', inject([RequireAnonGuard], (guard: RequireAnonGuard) => {
    expect(guard).toBeTruthy();
  }));
});
