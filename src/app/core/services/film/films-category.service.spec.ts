import { TestBed } from '@angular/core/testing';

import { FilmsCategoryService } from './films-category.service';

describe('FilmsCategoryService', () => {
  let service: FilmsCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
