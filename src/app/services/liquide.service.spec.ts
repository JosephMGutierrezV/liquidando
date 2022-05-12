import { TestBed } from '@angular/core/testing';

import { LiquideService } from './liquide.service';

describe('LiquideService', () => {
  let service: LiquideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
