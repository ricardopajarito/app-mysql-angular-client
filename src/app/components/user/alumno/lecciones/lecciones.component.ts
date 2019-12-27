import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeccionesService } from '../../../../services/lecciones.service';
import { AuthService } from '../../../../services/auth.service';
import { AlumnoI } from '../../../../models/alumno';


@Component({
  selector: 'app-lecciones',
  templateUrl: './lecciones.component.html',
  styleUrls: ['./lecciones.component.css']
})
export class LeccionesComponent implements OnInit {
  user: AlumnoI;
  lecciones: any = [];
  tema = '';
  grado = '';

  constructor(private router: Router, private activedRoute: ActivatedRoute, private leccionesService: LeccionesService, private authService: AuthService) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.user = this.authService.getCurrentUserAlumno();
    console.log(params.tema);
    console.log(params.grado);
    if (params.tema) {
      if (params.grado && params.grado == this.user.grado) {
        this.leccionesService.getLecciones(params.tema, params.grado).subscribe(
          res => {
            console.log(res);
            this.tema = params.tema;
            this.grado = params.grado;
            this.lecciones = res;
          }, err => console.log(err));
      } else {
        console.log('no es el grado del estudiante');
      }
    }
  }
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio/login');
  }

}
