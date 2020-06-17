import { TestBed } from '@angular/core/testing';

import { TravailleService } from './travaille.service';

describe('TravailleService', () => {
  let service: TravailleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TravailleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
