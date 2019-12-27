import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListalumnosComponent } from './listalumnos.component';

describe('ListalumnosComponent', () => {
  let component: ListalumnosComponent;
  let fixture: ComponentFixture<ListalumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListalumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
