import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { AlumnoI } from '../../../../models/alumno';

@Component({
  selector: 'app-repaso',
  templateUrl: './repaso.component.html',
  styleUrls: ['./repaso.component.css']
})
export class RepasoComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
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
