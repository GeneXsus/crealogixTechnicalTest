import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilmsDetailsComponent } from './films-details.component';

describe('FilmsDetailsComponent', () => {
  let component: FilmsDetailsComponent;
  let fixture: ComponentFixture<FilmsDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports:[
			HttpClientTestingModule,
			RouterTestingModule
		],
      declarations: [ FilmsDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    
  it('loadDetails', () => {
    expect(component.loadDetails('https://swapi.dev/api/films/1')).toBe(void 0);
  });

  it('rollBack with needRollBack', () => {
	localStorage.setItem('needRollBack', 'true')
	component.rollBack()
    expect(localStorage.getItem('rollBack')).toBe('true');
  });
  it('rollBack without needRollBack', () => {
	localStorage.removeItem('needRollBack')
	localStorage.removeItem('rollBack')
	component.rollBack()
    expect(localStorage.getItem('rollBack')).toBeNull();
  });
});
