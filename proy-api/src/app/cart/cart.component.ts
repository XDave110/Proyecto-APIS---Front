import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public pagina: number;
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
    this.cartService.obtenerCantidadLibros();
  }

  estaVacioElCarro() {
    return this.libros.length === 0;
  }

  obtenerCantidad(tag: HTMLSelectElement, libro: any) {
    libro.cantidad = +tag.value;
    this.cartService.obtenerCantidadLibros();
  }

  vaciarCarro() {
    this.cartService.eliminarTodo();
    this.cartService.obtenerCantidadLibros();
  }

  obtenerTotal(): number {
    return this.cartService.obtenerPrecioTotal();
  }


  realizarPago() {
    this.cartService.realizarPago();
  }

  
}
