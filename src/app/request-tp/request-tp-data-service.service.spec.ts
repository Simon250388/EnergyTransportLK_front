import { TestBed } from '@angular/core/testing';

import { RequestTPDataService } from './request-tp-data-service.service';

describe('RequestTPDataServiceService', () => {
  let service: RequestTPDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTPDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
