import { TestBed } from '@angular/core/testing';

import { MyDialogServiceService } from './my-dialog-service.service';

describe('MyDialogServiceService', () => {
  let service: MyDialogServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyDialogServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
