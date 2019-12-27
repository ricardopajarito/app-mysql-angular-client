import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../../services/profesor.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listaprofesores',
  templateUrl: './listaprofesores.component.html',
  styleUrls: ['./listaprofesores.component.css']
})
export class ListaprofesoresComponent implements OnInit {
  profesores: any = [];
  durationInSeconds = 5;
  constructor(private profesorService: ProfesorService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {
    this.getProfesores();
  }

  getProfesores() {
    this.profesorService.getProfesores().subscribe(res => {
      this.profesores = res;
    }, err => console.log(err));
  }
  eliminarProfesor(id: number) {
    //console.log(id);
    this.profesorService.deleteProfesor(id).subscribe(res => {
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
