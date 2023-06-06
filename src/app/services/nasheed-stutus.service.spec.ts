import { TestBed } from '@angular/core/testing';

import { NasheedStutusService } from './nasheed-stutus.service';

describe('NasheedStutusService', () => {
  let service: NasheedStutusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasheedStutusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
