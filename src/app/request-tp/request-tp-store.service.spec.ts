import { TestBed } from '@angular/core/testing';

import { RequestTPStoreService } from './request-tp-store.service';

describe('RequestTPStoreService', () => {
  let service: RequestTPStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTPStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
