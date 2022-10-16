import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
		imports:[
			HttpClientTestingModule,
			RouterTestingModule
		],
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
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
  it('doSearch notFound', () => {
    expect(component.doSearch(500)).toBe(void 0);
  });
  it('doSearch ', () => {
    expect(component.doSearch(0)).toBe(void 0);
  });


});
