import { TestBed } from '@angular/core/testing';

import { CineclubService } from './cineclub.service';

describe('CineclubService', () => {
  let service: CineclubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CineclubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
