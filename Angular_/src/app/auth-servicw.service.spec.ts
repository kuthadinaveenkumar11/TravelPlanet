import { TestBed } from '@angular/core/testing';

import { AuthServicwService } from './auth-servicw.service';

describe('AuthServicwService', () => {
  let service: AuthServicwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServicwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
