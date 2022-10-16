import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';
import { StarWarsCallService } from 'src/app/services/star-wars-call.service';

describe('HeaderComponent', () => {
	let component: HeaderComponent;
	let fixture: ComponentFixture<HeaderComponent>;
	let service: StarWarsCallService;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				RouterTestingModule
			],
			declarations: [HeaderComponent],
			providers: [StarWarsCallService]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HeaderComponent);
		component = fixture.componentInstance;
		service = TestBed.inject(StarWarsCallService)
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('getSearch and unshiftSearch Test', () => {
		localStorage.removeItem('searchArray')
		component.searchText = 'solo';
		component.saveSearch();
		expect(JSON.parse(localStorage.getItem('searchArray'))).toEqual(['solo']);
	});

	describe('doSearch', () => {
		it('array not found', () => {
			const spyEmitSearched = spyOn(service, 'emitSearched');
			spyOn(service, 'getSearch').and.returnValue(['Han', 'solo']);
			component.doSearch(500);
			expect(spyEmitSearched).not.toHaveBeenCalled();
		});

		it('array found', () => {
			const spyEmitSearched = spyOn(service, 'emitSearched');
			spyOn(service, 'getSearch').and.returnValue(['Han', 'solo']);
			component.doSearch(1);
			expect(spyEmitSearched).toHaveBeenCalledWith('solo');
		});
	});

});
