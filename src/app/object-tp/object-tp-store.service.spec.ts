import { TestBed } from '@angular/core/testing';

import { ObjectTpStoreService } from './object-tp-store.service';

describe('ObjectTpStoreService', () => {
  let service: ObjectTpStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectTpStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
