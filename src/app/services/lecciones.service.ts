import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LeccionesService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }


  getLecciones(tema: string, grado: string) {
    return this.http.get(`${this.API_URI}/lecciones/${tema}/${grado}`);
  }

  getLeccion(id: string) {
    return this.http.get(`${this.API_URI}/lecciones/${id}`);
  }
}
