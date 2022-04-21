import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  number: number;

  constructor(public router: Router) { 
    this.number = 0;
  }

  ngOnInit(): void {
  }

}
