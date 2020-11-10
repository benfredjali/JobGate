import { TestBed } from '@angular/core/testing';

import { CommentairService } from './commentair.service';

describe('CommentairService', () => {
  let service: CommentairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
