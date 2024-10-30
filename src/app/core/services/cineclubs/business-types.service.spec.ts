import { TestBed } from '@angular/core/testing';

import { BusinessTypesService } from './business-types.service';

describe('BusinessTypesService', () => {
  let service: BusinessTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BusinessTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
