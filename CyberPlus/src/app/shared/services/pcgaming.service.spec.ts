import { TestBed } from '@angular/core/testing';

import { PcgamingService } from './pcgaming.service';

describe('PcgamingService', () => {
  let service: PcgamingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcgamingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
