import { TestBed } from '@angular/core/testing';

import { NasheedService } from './nasheed.service';

describe('NasheedService', () => {
  let service: NasheedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasheedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
