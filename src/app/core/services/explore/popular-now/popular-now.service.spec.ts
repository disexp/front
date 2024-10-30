import { TestBed } from '@angular/core/testing';

import { PopularNowService } from './popular-now.service';

describe('PopularNowService', () => {
  let service: PopularNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
