import { TestBed, inject } from '@angular/core/testing';

import { TestServService } from './test-serv.service';

describe('TestServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestServService]
    });
  });

  it('should be created', inject([TestServService], (service: TestServService) => {
    expect(service).toBeTruthy();
  }));
});
