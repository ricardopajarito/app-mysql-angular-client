import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserI } from '../../../models/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('usuario', {static: true}) firstname: any;
  durationInSeconds = 5;
  user: UserI = {
    usuario: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.firstname.nativeElement.focus();
  }
  onLogin(): void {
    // console.log('Login ', this.user);
    this.authService.login(this.user).subscribe(res => {
      //console.log(res.dataUser.usuario);
      //console.log(res.dataUser.rol);
      const rol = res.dataUser.rol;
      if (rol === 1) {
        this.authService.setUserAdmin(res.dataUser.usuario, rol);
        this.router.navigateByUrl('/admin/alumnos');
      } else if (rol === 2) {
        this.authService.setUserProfesor(res.dataUser.usuario, rol);
        this.router.navigateByUrl('/profesor');
      } else if (rol === 3) {
        this.authService.setUserAlumno(res.dataUser.usuario, rol);
        this.router.navigateByUrl('/alumno');
      }
    }, err => this.mensaje('Usuario y/o contraseña incorrectos'));
  }
  mensaje(mensaje: string) {
    this._snackBar.open(mensaje, 'ok', {
      duration: this.durationInSeconds * 1000,
    });
  }
}
