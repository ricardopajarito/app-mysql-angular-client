import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

  constructor( private location: Location ) { }

  ngOnInit() {
  }
  goBack() {
    this.location.back();

    console.log( 'goBack()...' );
  }
}
