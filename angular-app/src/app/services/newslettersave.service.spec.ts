import { TestBed, inject } from '@angular/core/testing';

import { NewslettersaveService } from './newslettersave.service';

describe('NewslettersaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewslettersaveService]
    });
  });

  it('should be created', inject([NewslettersaveService], (service: NewslettersaveService) => {
    expect(service).toBeTruthy();
  }));
});
