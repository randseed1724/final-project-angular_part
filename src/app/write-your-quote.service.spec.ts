import { TestBed, inject } from '@angular/core/testing';

import { WriteYourQuoteService } from './write-your-quote.service';

describe('WriteYourQuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WriteYourQuoteService]
    });
  });

  it('should be created', inject([WriteYourQuoteService], (service: WriteYourQuoteService) => {
    expect(service).toBeTruthy();
  }));
});
