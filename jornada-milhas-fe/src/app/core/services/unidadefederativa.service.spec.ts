import { TestBed } from '@angular/core/testing';

import { UnidadefederativaService } from './unidadefederativa.service';

describe('UnidadefederativaService', () => {
  let service: UnidadefederativaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnidadefederativaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
