import { TestBed } from '@angular/core/testing';

import { PasswordTestService } from './password-test.service';

describe('PasswordTestService', () => {
  let service: PasswordTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
