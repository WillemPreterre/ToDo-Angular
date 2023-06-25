import { TestBed } from '@angular/core/testing';

import { RouteAPiService } from './route-api.service';

describe('RouteAPiService', () => {
  let service: RouteAPiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteAPiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
