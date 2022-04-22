import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public libros: any;
  
  constructor(private cartService: CartService) { 
    this.libros = cartService.obtenerLibros();
  }

  ngOnInit(): void {
  
  }

}
