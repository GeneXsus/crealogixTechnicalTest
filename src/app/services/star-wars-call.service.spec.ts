
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StarWarsCallService } from './star-wars-call.service';
import { RouterTestingModule } from "@angular/router/testing";
describe('StarWarsCallService', () => {
  let service: StarWarsCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({
		imports: [ HttpClientTestingModule,RouterTestingModule ]
	});
    service = TestBed.inject(StarWarsCallService);
	
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('callUrl', () => {
    expect(service.callUrl('https://swapi.dev/api/people/')).toBeTruthy();
  });
  
  it('emitSearched', () => {
    expect(service.emitSearched('Solo')).toBe(void 0);
  });
  
  it('getSearch and unshiftSearch Test', () => {
	localStorage.removeItem('searchArray')
	service.unshiftSearch('solo')
    expect(service.getSearch()).toEqual(['solo']);
  });
  
});
