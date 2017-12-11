import { TestBed, async, inject } from '@angular/core/testing';

import { RequireAdminGuard } from './require-admin.guard';

describe('RequireAdminGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequireAdminGuard]
    });
  });

  it('should ...', inject([RequireAdminGuard], (guard: RequireAdminGuard) => {
    expect(guard).toBeTruthy();
  }));
});
