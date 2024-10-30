import { TestBed } from '@angular/core/testing';

import { PopularPostService } from './popular-post.service';

describe('PopularPostService', () => {
  let service: PopularPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
