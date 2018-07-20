import { TestBed, inject } from '@angular/core/testing';

import { ErrorsInputService } from './errors-input.service';

describe('ErrorsInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrorsInputService]
    });
  });

  it('should be created', inject([ErrorsInputService], (service: ErrorsInputService) => {
    expect(service).toBeTruthy();
  }));
});
