import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../service/cart.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: Libro;
  @Input() cantidad: number;

  constructor(private cartService: CartService) { 
  }

  ngOnInit(): void {
    this.imprimirCantidad();
  }

  devolverDescripcion(): string {
    return this.libro.autor + "\n" + "$" + this.libro.precio;
  }

  imprimirCantidad(): void {
    console.log(this.cantidad);
  }

  agregarAlCarro(libro: any) {
    this.cartService.agregarAlCarro(libro);
  }

}
