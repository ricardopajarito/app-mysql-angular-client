import { Component, OnInit } from '@angular/core';
import { ProfesorI } from 'src/app/models/profesor';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfesorService } from '../../../../services/profesor.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregaprofesores',
  templateUrl: './agregaprofesores.component.html',
  styleUrls: ['./agregaprofesores.component.css']
})
export class AgregaprofesoresComponent implements OnInit {

  durationInSeconds = 5;
  profesor: any = {
    id: 0,
    nombre: '',
    paterno: '',
    materno: '',
    usuario: '',
    password: '',
    cedula: '',
    registro: ''
  };
  passwordPattern: any = /^[a-zA-Z0-9]*$/;
  profesorForm: FormGroup;
  edit = false;

  disabled = true;
  nuevoPassword = '';

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      paterno: new FormControl('', [Validators.required]),
      materno: new FormControl('', [Validators.required]),
      usuario: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.passwordPattern)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern(this.passwordPattern)]),
      cedula: new FormControl('', [Validators.required])
    });
  }
  constructor(private router: Router, private profesorService: ProfesorService, private activedRoute: ActivatedRoute, private _snackBar: MatSnackBar) {

  }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      //console.log(params.id);
      this.profesorService.getProfesor(params.id)
        .subscribe(
          res => {
            //console.log(res);
            this.profesor = res;
            this.edit = true;
          },
          err => console.log(err)
        );
    }
    this.profesorForm = this.createFormGroup();
  }
  hasError(controlName: string, errorName: string) {
    return this.profesorForm.controls[controlName].hasError(errorName);
  }
  agregarProfesor(profesorFormValue) {
    if (this.profesorForm.valid) {
      delete this.profesor.id;
      delete this.profesor.registro;
      this.profesor.nombre = profesorFormValue.nombre;
      this.profesor.paterno = profesorFormValue.paterno;
      this.profesor.materno = profesorFormValue.materno;
      this.profesor.usuario = profesorFormValue.usuario;
      this.profesor.password = profesorFormValue.password;
      this.profesor.cedula = profesorFormValue.cedula;
      //console.log(this.profesor);

      this.profesorService.saveProfesor(this.profesor)
        .subscribe(
          res => {
            console.log(res);
            this.mensaje('Nuevo profesor se ha creado con éxito');
            this.router.navigate(['/admin/profesores']);
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

  actualizarProfesor() {
    if (this.disabled === false && this.nuevoPassword !== '') {
      this.profesor.password = this.nuevoPassword;
    } else {
      delete this.profesor.password;
    }
    delete this.profesor.registro;
    this.profesorService.updateProfesor(this.profesor.id, this.profesor)
      .subscribe(
        res => {
          console.log(res);
          this.mensaje('El profesor se actualizó con éxito');
          this.router.navigate(['/admin/profesores']);
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
  cancelar() {
    this.router.navigate(['/admin/profesores']);
  }

}
