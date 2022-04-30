import { TestBed } from '@angular/core/testing';

import { FraseApiService } from './frase-api.service';

describe('FraseApiService', () => {
  let service: FraseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
