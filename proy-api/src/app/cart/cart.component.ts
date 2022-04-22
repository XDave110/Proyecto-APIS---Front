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
  }

  ngOnInit(): void {
    this.cartService.obtenerLibros().subscribe(res => {
      this.libros = res;
    });
  }

  eliminarLibroDelCarro(libro: any) {
    this.cartService.borrarLibroDeLista(libro);
  }

  estaVacioElCarro() {
    return this.libros.length === 0;
  }



}
