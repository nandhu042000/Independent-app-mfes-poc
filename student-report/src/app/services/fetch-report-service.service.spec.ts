import { TestBed } from '@angular/core/testing';

import { FetchReportServiceService } from './fetch-report-service.service';

describe('FetchReportServiceService', () => {
  let service: FetchReportServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchReportServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
