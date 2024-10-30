import { TestBed } from '@angular/core/testing';

import { CinephileProfileService } from './cinephile-profile.service';

describe('CinephileProfileService', () => {
  let service: CinephileProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinephileProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
