import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class ProfesorGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    const rol: number = this.authService.getRol();
    if (this.authService.getCurrentUserProfesor()) {
      if (rol === 2) {
        return true;
      } else if (rol === 1) {
        this.router.navigate(['/admin/alumnos']);
        return false;
      } else if (rol === 3) {
        this.router.navigate(['/alumno']);
        return false;
      }
    } else {
      this.router.navigate(['/inicio/login']);
      return false;
    }
  }

}
