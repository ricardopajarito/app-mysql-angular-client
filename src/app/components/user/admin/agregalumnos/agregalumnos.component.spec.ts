import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregalumnosComponent } from './agregalumnos.component';

describe('AgregalumnosComponent', () => {
  let component: AgregalumnosComponent;
  let fixture: ComponentFixture<AgregalumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregalumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
