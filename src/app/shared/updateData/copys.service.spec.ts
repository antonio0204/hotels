import { TestBed } from '@angular/core/testing';

import { CopysService } from './copys.service';

describe('CopysService', () => {
  let service: CopysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CopysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
