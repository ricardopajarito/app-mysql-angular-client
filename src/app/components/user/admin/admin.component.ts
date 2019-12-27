import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { AdminI } from '../../../models/admin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  durationInSeconds = 5;
  links = [
  {
    label: 'Lista Alumnos',
    path: '/admin/alumnos'
  },
  {
    label: 'Lista Profesores',
    path: '/admin/profesores'
  }];
  // links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  constructor(private authService: AuthService, private router: Router) { }

  user: AdminI;

  ngOnInit() {
    this.user = this.authService.getCurrentUserAdmin();
    //console.log(this.user);
  }


  logOut() {
    this.authService.logout();
    this.router.navigateByUrl('/inicio/login');
  }
}
