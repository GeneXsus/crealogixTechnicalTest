import { TestBed } from '@angular/core/testing';

import { StarWarsCallService } from './star-wars-call.service';

describe('StarWarsCallService', () => {
  let service: StarWarsCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StarWarsCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
