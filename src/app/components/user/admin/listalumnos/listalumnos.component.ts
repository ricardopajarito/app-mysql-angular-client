import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../../../services/alumno.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-listalumnos',
  templateUrl: './listalumnos.component.html',
  styleUrls: ['./listalumnos.component.css']
})
export class ListalumnosComponent implements OnInit {
  durationInSeconds = 5;
  alumnos: any = [];
  constructor(private alumnoService: AlumnoService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getAlumnos();
  }
  getAlumnos() {
    this.alumnoService.getAlumnos().subscribe(res => {
      this.alumnos = res;
      this.alumnos.sort((a, b) => {
        return (a.grado - b.grado);
      });
    }, err => console.log(err));
  }
  eliminarAlumno(id: number) {
    //console.log(id);
    this.alumnoService.deleteAlumno(id).subscribe(res => {
      this.mensaje('El usuario se eliminó correctamente');
      //console.log(res);
      this.ngOnInit();
    }, err => console.log(err));
  }
  mensaje(mensaje: string) {
    this._snackBar.open(mensaje, 'ok', {
      duration: this.durationInSeconds * 1000,
    });
  }

}
