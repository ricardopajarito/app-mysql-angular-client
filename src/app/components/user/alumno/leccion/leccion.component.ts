import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LeccionesService } from '../../../../services/lecciones.service';
import { AuthService } from '../../../../services/auth.service';
import { LeccionI } from '../../../../models/leccion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AlumnoI } from '../../../../models/alumno';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-leccion',
  templateUrl: './leccion.component.html',
  styleUrls: ['./leccion.component.css']
})
export class LeccionComponent implements OnInit {
  durationInSeconds = 5;
  user: AlumnoI;
  leccion: LeccionI = {
    id: 0,
    nombre: '',
    grado: 0,
    tema: 0,
    tipo: 0,
    contenido: ''
  };

  contenido: any = {};

  tema = 0;
  grado = 0;
  id = 0;
  tipo = 0;
  // lecturas
  isEditable = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fiveFormGroup: FormGroup;
  // gramatica
  palabras = [];
  verbos = [];
  nombres = [];
  adjetivos = [];
  vSolucion = [];
  nSolucion = [];
  aSolucion = [];


  constructor(private router: Router, private activedRoute: ActivatedRoute, private leccionesService: LeccionesService, private authService: AuthService, private _formBuilder: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    const params = this.activedRoute.snapshot.params;
    this.user = this.authService.getCurrentUserAlumno();
    if (params.tema) {
      if (params.grado && params.grado == this.user.grado) {
        if (params.id) {
          if (params.tipo) {
            this.leccionesService.getLeccion(params.id).subscribe(
              res => {
                this.tema = params.tema;
                this.grado = params.grado;
                this.id = params.id;
                this.tipo = params.tipo;
                this.leccion = res;
                this.contenido = JSON.parse(this.leccion.contenido);

                if(this.tipo == 2) {
                    // console.log(this.contenido.Palabras.length); tamanio del array
                    this.palabras = this.contenido.Palabras;
                    this.vSolucion = this.contenido.Solucion.verbos.sort();
                    this.nSolucion = this.contenido.Solucion.nombres.sort();
                    this.aSolucion = this.contenido.Solucion.adjetivos.sort();
                }
              }, err => console.log(err));
            this.firstFormGroup = this._formBuilder.group({
              firstCtrl: ['', Validators.required]
            });
            this.secondFormGroup = this._formBuilder.group({
              secondCtrl: ['', Validators.required]
            });
            this.thirdFormGroup = this._formBuilder.group({
              thirdCtrl: ['', Validators.required]
            });
            this.fourFormGroup = this._formBuilder.group({
              fourCtrl: ['', Validators.required]
            });
            this.fiveFormGroup = this._formBuilder.group({
              fiveCtrl: ['', Validators.required]
            });
          }
        }
      }
    }
  }

  comprobar3(){
    console.log(this.contenido.Solucion[0]);
  }
  comprobar2(){
    let band = false;
    let band2 = false;
    let band3 = false;
    this.verbos = this.verbos.sort();
    this.nombres = this.nombres.sort();
    this.adjetivos = this.adjetivos.sort();
    if(this.verbos.length == this.vSolucion.length){
      band = this.verbos.every((v,i) =>{
        return v === this.vSolucion[i]
      });
    }
    if(this.nombres.length == this.nSolucion.length){
      band2 = this.nombres.every((v,i) =>{
        return v === this.nSolucion[i]
      });
    }
    if(this.adjetivos.length == this.aSolucion.length){
      band3 = this.adjetivos.every((v,i) =>{
        return v === this.aSolucion[i]
      });
    }
    if(band && band2 && band3){
      this.mensaje('¡Excelente, todo está correcto, sigue así!');
    }else{
      this.mensaje('¡Incorrecto!');
    }
  }
  comprobar1(){
    console.log(this.contenido.url);
  }




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  mensaje(mensaje: string) {
    this._snackBar.open(mensaje, 'Entendido', {
      duration: this.durationInSeconds * 1000,
    });
  }
  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio/login');
  }

}
