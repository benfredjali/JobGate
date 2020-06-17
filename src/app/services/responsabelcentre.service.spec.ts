import { TestBed } from '@angular/core/testing';

import { ResponsabelcentreService } from './responsabelcentre.service';

describe('ResponsabelcentreService', () => {
  let service: ResponsabelcentreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsabelcentreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
