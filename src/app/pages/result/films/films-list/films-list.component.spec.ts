import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { FilmsListComponent } from './films-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

describe('FilmsListComponent', () => {
  let component: FilmsListComponent;
  let fixture: ComponentFixture<FilmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports:[
			HttpClientTestingModule,
			RouterTestingModule
		],
      declarations: [ FilmsListComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
 
  it('LoadList and changePage', () => {
	const url= 'https://swapi.dev/api/films/';
	const spyLoadList = spyOn(component, 'loadList')
	component.changePage(url)
    expect(spyLoadList).toHaveBeenCalledWith(url);
    expect(component.loadList(url)).toBe(void 0);
  });

  it('changePage', () => {
	localStorage.removeItem('rollBackUrl')
	localStorage.removeItem('needRollBack')
	component.changePage('https://swapi.dev/api/films/1')
    expect(localStorage.getItem('rollBackUrl')).toBe('https://swapi.dev/api/films/1');
    expect(localStorage.getItem('needRollBack')).toBe('true');
    expect(localStorage.getItem('rollBack')).toBeNull();
  });

  it('getUrlItem', () => {
    expect(component.getUrlItem('https://swapi.dev/api/films/1')).toBe('/films/1');
  });
});
