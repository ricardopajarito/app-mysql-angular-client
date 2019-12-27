import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;
  constructor() { }

  ngOnInit() {
    this.myStyle = {
      'position': 'absolute',
      'min-width': '100%',
      'height': '100vh',
      'top': 0,
      'left': 0,
    };
    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#ffffff'
          },
          shape: {
              type: 'circle',
          },
          size: {
            value: 6
          },
          line_linked: {
            width: 2
          },
          move: {
            speed: 6
          }
      }
    };
  }

}
