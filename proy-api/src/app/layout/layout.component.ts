import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  number: number = 0;

  constructor(public router: Router, private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.cartService.obtenerLibros().subscribe(res => {
      this.number = res.length;
    });
  }

}
