import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressComponent } from './inprogress.component';

describe('InprogressComponent', () => {
  let component: InprogressComponent;
  let fixture: ComponentFixture<InprogressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render In Process', () => {
    const element = fixture.nativeElement.querySelector('h1').textContent;
    expect(element).toContain('In Progress');
  });
});
