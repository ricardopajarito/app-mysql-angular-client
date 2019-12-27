import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { UserI } from '../models/user';
import {tap} from 'rxjs/operators';
import {Observable, BehaviorSubject} from 'rxjs';
import { AdminI } from '../models/admin';
import { ProfesorI } from '../models/profesor';
import { AlumnoI } from '../models/alumno';
import { isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;

  constructor(private http: HttpClient) { }

  login(user: UserI): Observable<JwtResponseI> {
    return this.http.post<JwtResponseI>(`${this.API_URI}/login`, user).pipe(
      tap((res: JwtResponseI) => {
        if (res) {
          this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
        }
      })
    );
  }
  setUserAdmin(user: AdminI, rol: number): void {
    const userstring = JSON.stringify(user);
    const userrol = String(rol);
    localStorage.setItem('currentUser', userstring);
    localStorage.setItem('rol', userrol);
  }
  setUserProfesor(user: ProfesorI, rol: number): void {
    const userstring = JSON.stringify(user);
    const userrol = String(rol);
    localStorage.setItem('currentUser', userstring);
    localStorage.setItem('rol', userrol);
  }
  setUserAlumno(user: AlumnoI, rol: number): void {
    const userstring = JSON.stringify(user);
    const userrol = String(rol);
    localStorage.setItem('currentUser', userstring);
    localStorage.setItem('rol', userrol);
  }

  getCurrentUserAdmin(): AdminI {
    const userstring = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userstring)) {
      const user: AdminI = JSON.parse(userstring);
      return user;
    } else {
      return null;
    }
  }

  getCurrentUserAlumno(): AlumnoI {
    const userstring = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userstring)) {
      const user: AlumnoI = JSON.parse(userstring);
      return user;
    } else {
      return null;
    }
  }
  getCurrentUserProfesor(): ProfesorI {
    const userstring = localStorage.getItem('currentUser');
    if (!isNullOrUndefined(userstring)) {
      const user: ProfesorI = JSON.parse(userstring);
      return user;
    } else {
      return null;
    }
  }
  getRol(): number {
    const rolstring = localStorage.getItem('rol');
    if (!isNullOrUndefined(rolstring)) {
      return Number(rolstring);
    } else {
      return null;
    }
  }
  logout(): void {
    this.token = '';
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('EXPIRES_IN');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('rol');
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem('ACCESS_TOKEN', token);
    localStorage.setItem('EXPIRES_IN', expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('ACCESS_TOKEN');
    }
    return this.token;
  }
}
