import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartListaLibros: any = [];
  public listaLibros = new BehaviorSubject<any>([]);

  constructor() { }

  obtenerLibros() {
    return this.listaLibros.asObservable();
  }

  setLibro(libro: any) {
    this.cartListaLibros.push(...libro);
    this.listaLibros.next(libro);
  }

  agregarAlCarro(libro: any) {
    this.cartListaLibros.push(libro);
    this.listaLibros.next(this.cartListaLibros);
    this.obtenerPrecioTotal();
  }

  obtenerPrecioTotal() {
    let total = 0;
    this.cartListaLibros.map((libro:any) => {
      total += libro.precio;
    })
  }

  borrarLibroDeLista(libro: any) {
    this.cartListaLibros.map((a: any, index: any) => {
      if (libro.isbn === a.isbn) {
        this.cartListaLibros.splice(index, 1);
      }
    })
  }

  eliminarTodo() {
    this.cartListaLibros = []
    this.listaLibros.next(this.cartListaLibros);
  }


}
