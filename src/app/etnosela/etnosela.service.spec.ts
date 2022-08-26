import { TestBed } from '@angular/core/testing';

import { EtnoselaService } from './etnosela.service';

describe('EtnoselaService', () => {
  let service: EtnoselaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EtnoselaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
