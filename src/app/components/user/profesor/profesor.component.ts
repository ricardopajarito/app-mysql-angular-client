import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { ProfesorI } from '../../../models/profesor';
import { AlumnoService } from '../../../services/alumno.service';
import { AlumnoI } from '../../../models/alumno';


@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  alumnos: any = [];
  constructor(private authService: AuthService, private router: Router, private alumnoService: AlumnoService) { }
  user: ProfesorI;

  ngOnInit() {
    this.user = this.authService.getCurrentUserProfesor();
    //console.log(this.user);
    this.getAlumnos();
  }
  getAlumnos() {
    this.alumnoService.getAlumnosByProfe(this.user.id).subscribe(res => {
      //console.log(res);
      this.alumnos = res;
      this.alumnos.sort((a: AlumnoI, b: AlumnoI) => {
        return (a.grado - b.grado);
      });
    }, err => console.log(err));
  }
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio/login');
  }
}
