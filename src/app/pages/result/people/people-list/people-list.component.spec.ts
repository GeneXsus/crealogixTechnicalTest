import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { PeopleListComponent } from './people-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterPipe } from 'src/app/pipes/filter.pipe';

describe('PeopleListComponent', () => {
  let component: PeopleListComponent;
  let fixture: ComponentFixture<PeopleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports:[
			HttpClientTestingModule,
			RouterTestingModule
		],
      declarations: [ PeopleListComponent,FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('LoadList', () => {
    expect(component.loadList('https://swapi.dev/api/people/')).toBe(void 0);
  });

  it('changePage', () => {
    expect(component.changePage('https://swapi.dev/api/people/1')).toBe(void 0);
  });

  it('getUrlItem', () => {
    expect(component.getUrlItem('https://swapi.dev/api/people/1')).toBe('/people/1');
  });
  
  
});
