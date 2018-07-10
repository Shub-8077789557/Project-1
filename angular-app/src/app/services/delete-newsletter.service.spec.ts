import { TestBed, inject } from '@angular/core/testing';

import { DeleteNewsletterService } from './delete-newsletter.service';

describe('DeleteNewsletterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeleteNewsletterService]
    });
  });

  it('should be created', inject([DeleteNewsletterService], (service: DeleteNewsletterService) => {
    expect(service).toBeTruthy();
  }));
});
