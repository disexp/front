import { TestBed } from '@angular/core/testing';

import { FilmsProfileService } from './films-profile.service';

describe('MoviesProfileServiceService', () => {
  let service: FilmsProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
