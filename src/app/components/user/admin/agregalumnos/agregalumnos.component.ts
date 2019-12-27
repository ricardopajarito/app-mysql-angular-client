import { Component, OnInit } from '@angular/core';
import { ProfesorService } from '../../../../services/profesor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../../../services/alumno.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-agregalumnos',
  templateUrl: './agregalumnos.component.html',
  styleUrls: ['./agregalumnos.component.css']
})
export class AgregalumnosComponent implements OnInit {
  durationInSeconds = 5;
  profesores: any = [];

  alumno: any = {
    id: 0,
    nombre: '',
    paterno: '',
    materno: '',
    grado: 0,
    grupo: '',
    usuario: '',
    password: '',
    ortografia: 0,
    lectura: 0,
    gramatica: 0,
    id_profesor: 0,
    registro: ''
  };
  grados = [1, 2, 3, 4, 5, 6];
  grupos = ['A', 'B', 'C'];
  passwordPattern: any = /^[a-zA-Z0-9]*$/;
  alumnoForm: FormGroup;
  edit = false;

  disabled = true;
  nuevoPassword = '';

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      paterno: new FormControl('', [Validators.required]),
      materno: new FormControl('', [Validators.required]),
      grado: new FormControl('', [Validators.required]),
      grupo: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.passwordPattern)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.passwordPattern)]),
      profesor: new FormControl('', [Validators.required])
    });
  }

  constructor(private profesorService: ProfesorService, private activedRoute: ActivatedRoute, private router: Router, private alumnoService: AlumnoService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProfesores();
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      //console.log(params.id);
      this.alumnoService.getAlumno(params.id)
        .subscribe(
          res => {
            //console.log(res);
            this.alumno = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }
    this.alumnoForm = this.createFormGroup();
  }
  hasError(controlName: string, errorName: string) {
    return this.alumnoForm.controls[controlName].hasError(errorName);
  }

  agregarAlumno(alumnoFormValue) {
    if (this.alumnoForm.valid) {
      //console.log(this.alumno);
      delete this.alumno.id;
      delete this.alumno.registro;
      this.alumno.nombre = alumnoFormValue.nombre;
      this.alumno.paterno = alumnoFormValue.paterno;
      this.alumno.materno = alumnoFormValue.materno;
      this.alumno.grado = alumnoFormValue.grado;
      this.alumno.grupo = alumnoFormValue.grupo;
      this.alumno.usuario = alumnoFormValue.usuario;
      this.alumno.password = alumnoFormValue.password;
      this.alumno.id_profesor = alumnoFormValue.profesor;
      console.log(this.alumno);

      this.alumnoService.saveAlumno(this.alumno)
        .subscribe(
          res => {
            console.log(res);
            this.mensaje('Nuevo alumno se ha creado con éxito');
            this.router.navigate(['/admin/alumnos']);
          },
          err => {
            console.log(err);
            this.mensaje('El nombre usuario que quieres registrar ya existe');
          }
        );
    }
  }
  mensaje(mensaje: string) {
    this._snackBar.open(mensaje, 'ok', {
      duration: this.durationInSeconds * 1000,
    });
  }
  actualizarAlumno() {
    if (this.disabled === false && this.nuevoPassword !== '') {
      this.alumno.password = this.nuevoPassword;
    } else {
      delete this.alumno.password;
    }
    delete this.alumno.registro;
    this.alumnoService.updateAlumno(this.alumno.id, this.alumno)
      .subscribe(
        res => {
          console.log(res);
          this.mensaje('El alumno se actualizó con éxito');
          this.router.navigate(['/admin/alumnos']);
        },
        err => console.log(err)
      );
  }
  habilitar() {
    if (this.disabled) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
  getProfesores() {
    this.profesorService.getProfesores().subscribe(res => {
      this.profesores = res;
    }, err => console.log(err));
  }
  cancelar() {
    this.router.navigate(['/admin/alumnos']);
  }
}
