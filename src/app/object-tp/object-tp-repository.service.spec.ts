import { TestBed } from '@angular/core/testing';

import { ObjectTpRepositoryService } from './object-tp-repository.service';

describe('ObjectTpRepositoryService', () => {
  let service: ObjectTpRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObjectTpRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
