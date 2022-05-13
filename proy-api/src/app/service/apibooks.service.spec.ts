import { TestBed } from '@angular/core/testing';

import { ApibooksService } from './apibooks.service';

describe('ApibooksService', () => {
  let service: ApibooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApibooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
