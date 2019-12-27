import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregaprofesoresComponent } from './agregaprofesores.component';

describe('AgregaprofesoresComponent', () => {
  let component: AgregaprofesoresComponent;
  let fixture: ComponentFixture<AgregaprofesoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregaprofesoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregaprofesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
