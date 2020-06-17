import { TestBed } from '@angular/core/testing';

import { AjouterFormationService } from './ajouter-formation.service';

describe('AjouterFormationService', () => {
  let service: AjouterFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
