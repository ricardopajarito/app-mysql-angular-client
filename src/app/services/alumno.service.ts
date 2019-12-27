import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';
import { AlumnoI } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAlumnos() {
    return this.http.get(`${this.API_URI}/alumnos`);
  }
  getAlumnosByProfe(id: string|number) {
    return this.http.get(`${this.API_URI}/alumnos/profesor/${id}`);
  }

  getAlumno(id: string) {
    return this.http.get(`${this.API_URI}/alumnos/${id}`);
  }

  deleteAlumno(id: string|number) {
    return this.http.delete(`${this.API_URI}/alumnos/${id}`);
  }

  saveAlumno(alumno: AlumnoI) {
    return this.http.post(`${this.API_URI}/alumnos`, alumno);
  }

  updateAlumno(id: string|number , updatedAlumno: AlumnoI): Observable<any> {
    return this.http.put(`${this.API_URI}/alumnos/${id}`, updatedAlumno);
  }
}
