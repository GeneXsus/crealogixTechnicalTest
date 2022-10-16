import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PeopleDetailsComponent } from './people-details.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleDetailsComponent', () => {
	let component: PeopleDetailsComponent;
	let fixture: ComponentFixture<PeopleDetailsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				HttpClientTestingModule,
				RouterTestingModule
			],
			declarations: [PeopleDetailsComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PeopleDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});


	it('loadDetails', () => {
		expect(component.loadDetails('https://swapi.dev/api/people/1')).toBe(void 0);
	});
	
	describe('rollBack', () => {
		it('with needRollBack', () => {
			localStorage.setItem('needRollBack', 'true')
			component.rollBack()
			expect(localStorage.getItem('rollBack')).toBe('true');
		});
		it('without needRollBack', () => {
			localStorage.removeItem('needRollBack')
			localStorage.removeItem('rollBack')
			component.rollBack()
			expect(localStorage.getItem('rollBack')).toBeNull();
		});
	});
});
