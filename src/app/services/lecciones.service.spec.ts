import { TestBed } from '@angular/core/testing';

import { LeccionesService } from './lecciones.service';

describe('LeccionesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LeccionesService = TestBed.get(LeccionesService);
    expect(service).toBeTruthy();
  });
});
