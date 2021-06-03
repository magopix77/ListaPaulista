import { TestBed } from '@angular/core/testing';

import { MostradadoService } from './mostradado.service';

describe('MostradadoService', () => {
  let service: MostradadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostradadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
