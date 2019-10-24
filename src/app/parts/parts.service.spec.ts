import { TestBed } from '@angular/core/testing';

import { PartService } from './part.service';

describe('PartsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartService = TestBed.get(PartService);
    expect(service).toBeTruthy();
  });
});
