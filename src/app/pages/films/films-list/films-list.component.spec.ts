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
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('LoadList', () => {
    expect(component.loadList('https://swapi.dev/api/films/')).toBe(void 0);
  });

  it('changePage', () => {
    expect(component.changePage('https://swapi.dev/api/films/1')).toBe(void 0);
  });

  it('getUrlItem', () => {
    expect(component.getUrlItem('https://swapi.dev/api/films/1')).toBe('/films/1');
  });
});
