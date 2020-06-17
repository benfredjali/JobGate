import { TestBed } from '@angular/core/testing';

import { ResponsabelSocietyService } from './responsabel-society.service';

describe('ResponsabelSocietyService', () => {
  let service: ResponsabelSocietyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsabelSocietyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
