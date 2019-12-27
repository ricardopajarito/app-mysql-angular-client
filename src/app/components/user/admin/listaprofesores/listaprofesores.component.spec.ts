import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaprofesoresComponent } from './listaprofesores.component';

describe('ListaprofesoresComponent', () => {
  let component: ListaprofesoresComponent;
  let fixture: ComponentFixture<ListaprofesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaprofesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
