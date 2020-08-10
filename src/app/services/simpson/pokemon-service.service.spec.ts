import { TestBed } from '@angular/core/testing';

import { SimpsonServiceService } from './simpson-service.service';

describe('PokemonServiceService', () => {
  let service: SimpsonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpsonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
