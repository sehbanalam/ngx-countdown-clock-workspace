import { TestBed } from '@angular/core/testing';

import { NgxCountdownClockService } from './ngx-countdown-clock.service';

describe('NgxCountdownClockService', () => {
  let service: NgxCountdownClockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxCountdownClockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
