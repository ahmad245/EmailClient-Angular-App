import { TestBed } from '@angular/core/testing';

import { SigninFormService } from './signin-form.service';

describe('SigninFormService', () => {
  let service: SigninFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SigninFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
