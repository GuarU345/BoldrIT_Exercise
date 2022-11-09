import { TestBed } from '@angular/core/testing';

import { WorksserviceService } from './worksservice.service';

describe('WorksserviceService', () => {
  let service: WorksserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorksserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
