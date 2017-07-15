import { TestBed, inject } from '@angular/core/testing';

import { QuotesrequestService } from './quotesrequest.service';

describe('QuotesrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuotesrequestService]
    });
  });

  it('should be created', inject([QuotesrequestService], (service: QuotesrequestService) => {
    expect(service).toBeTruthy();
  }));
});
