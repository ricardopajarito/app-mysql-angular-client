import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AlumnoI } from '../../../models/alumno';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: AlumnoI;
  ngOnInit() {
    this.user = this.authService.getCurrentUserAlumno();
    // console.log(this.user);
  }

  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio/login');
  }
}
