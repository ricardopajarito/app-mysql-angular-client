import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule , MatInputModule, MatCardModule} from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ParticlesModule } from 'angular-particle';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/user/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlumnoService } from './services/alumno.service';
import { AuthService } from './services/auth.service';
import { AdminComponent } from './components/user/admin/admin.component';
import { ProfesorComponent } from './components/user/profesor/profesor.component';
import { AlumnoComponent } from './components/user/alumno/alumno.component';
import { LeccionesComponent } from './components/user/alumno/lecciones/lecciones.component';
import { LeccionComponent } from './components/user/alumno/leccion/leccion.component';
import { ListalumnosComponent } from './components/user/admin/listalumnos/listalumnos.component';
import { ListaprofesoresComponent } from './components/user/admin/listaprofesores/listaprofesores.component';
import { AgregaprofesoresComponent } from './components/user/admin/agregaprofesores/agregaprofesores.component';
import { AgregalumnosComponent } from './components/user/admin/agregalumnos/agregalumnos.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { RepasoComponent } from './components/user/alumno/repaso/repaso.component';
import { TemasComponent } from './components/user/alumno/repaso/temas/temas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavigationComponent,
    AdminComponent,
    ProfesorComponent,
    AlumnoComponent,
    LeccionesComponent,
    LeccionComponent,
    ListalumnosComponent,
    ListaprofesoresComponent,
    AgregaprofesoresComponent,
    AgregalumnosComponent,
    NotfoundComponent,
    NosotrosComponent,
    RepasoComponent,
    TemasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    ParticlesModule,
    MatInputModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatStepperModule,
    DragDropModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PdfViewerModule
  ],
  providers: [
    AlumnoService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
