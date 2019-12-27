import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/user/login/login.component';
import { AdminComponent } from './components/user/admin/admin.component';
import { ProfesorComponent } from './components/user/profesor/profesor.component';
import { AlumnoComponent } from './components/user/alumno/alumno.component';
import { LeccionesComponent } from './components/user/alumno/lecciones/lecciones.component';
import { LeccionComponent } from './components/user/alumno/leccion/leccion.component';
import { ListalumnosComponent } from './components/user/admin/listalumnos/listalumnos.component';
import { ListaprofesoresComponent } from './components/user/admin/listaprofesores/listaprofesores.component';
import { AgregaprofesoresComponent } from './components/user/admin/agregaprofesores/agregaprofesores.component';
import { AgregalumnosComponent } from './components/user/admin/agregalumnos/agregalumnos.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfesorGuard } from './guards/profesor.guard';
import { AlumnoGuard } from './guards/alumno.guard';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RepasoComponent } from './components/user/alumno/repaso/repaso.component';
import { TemasComponent } from './components/user/alumno/repaso/temas/temas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'inicio/login',
    component: LoginComponent
  },
  {
    path: 'inicio/nosotros',
    component: NosotrosComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/alumnos',
    component: ListalumnosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/profesores',
    component: ListaprofesoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/profesorAdd',
    component: AgregaprofesoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/alumnoAdd',
    component: AgregalumnosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/profesor/edit/:id',
    component: AgregaprofesoresComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin/alumno/edit/:id',
    component: AgregalumnosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'profesor',
    component: ProfesorComponent,
    canActivate: [ProfesorGuard]
  },
  {
    path: 'alumno',
    component: AlumnoComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: 'alumno/:tema/:grado',
    component: LeccionesComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: 'alumno/:tema/:grado/:id/:tipo',
    component: LeccionComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: 'repaso',
    component: RepasoComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: 'repaso/:grado',
    component: TemasComponent,
    canActivate: [AlumnoGuard]
  },
  {
    path: '**', component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
