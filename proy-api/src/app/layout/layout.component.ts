import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  number: number;

  constructor() { 
    this.number = 0;
  }

  ngOnInit(): void {
  }

}
