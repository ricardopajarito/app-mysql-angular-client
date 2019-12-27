import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    const rol: number = this.authService.getRol();
    if (this.authService.getCurrentUserAdmin()) {
      if (rol === 1) {
        return true;
      } else if (rol === 2) {
        this.router.navigate(['/profesor']);
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
