import { TestBed } from '@angular/core/testing';

import { ShowtimeService } from './showtime.service';

describe('ShowtimeService', () => {
  let service: ShowtimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowtimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
