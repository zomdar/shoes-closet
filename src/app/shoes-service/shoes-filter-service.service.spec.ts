import { TestBed } from '@angular/core/testing';

import { ShoesFilterServiceService } from './shoes-filter-service.service';

describe('ShoesFilterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShoesFilterServiceService = TestBed.get(ShoesFilterServiceService);
    expect(service).toBeTruthy();
  });
});
