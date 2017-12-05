import { TestBed, inject } from '@angular/core/testing';

import { SelectorService } from './selector.service';

describe('SelectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectorService]
    });
  });

  it('should be created', inject([SelectorService], (service: SelectorService) => {
    expect(service).toBeTruthy();
  }));
});
