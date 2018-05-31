import { TestBed, inject } from '@angular/core/testing';

import { RestcalllService } from './restcalll.service';

describe('RestcalllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestcalllService]
    });
  });

  it('should be created', inject([RestcalllService], (service: RestcalllService) => {
    expect(service).toBeTruthy();
  }));
});
