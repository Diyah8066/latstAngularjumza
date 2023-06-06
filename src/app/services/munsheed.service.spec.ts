import { TestBed } from '@angular/core/testing';

import { MunsheedService } from './munsheed.service';

describe('MunsheedService', () => {
  let service: MunsheedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MunsheedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
