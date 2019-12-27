import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { ProfesorI } from '../models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  API_URI = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getProfesores() {
    return this.http.get(`${this.API_URI}/profesores`);
  }

  getProfesor(id: string) {
    return this.http.get(`${this.API_URI}/profesores/${id}`);
  }

  deleteProfesor(id: string|number) {
    return this.http.delete(`${this.API_URI}/profesores/${id}`);
  }

  saveProfesor(profesor: ProfesorI) {
    return this.http.post(`${this.API_URI}/profesores`, profesor);
  }

  updateProfesor(id: string|number , updatedProfesor: ProfesorI): Observable<any> {
    return this.http.put(`${this.API_URI}/profesores/${id}`, updatedProfesor);
  }
}
