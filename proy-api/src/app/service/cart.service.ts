import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartListaLibros: any = [];
  public listaLibros = new BehaviorSubject<any>([]);
  public cuentaLibros = new ReplaySubject<number>(0);
  public cuenta = this.cuentaLibros.asObservable();
  

  constructor() { 
    this.revisarLocalStorage();
  }

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
  }

  obtenerPrecioTotal() : number{
    let total = 0;
    this.cartListaLibros.map((libro:any) => {
      total += libro.precio * libro.cantidad;
    })
    
    return total;
  }

  borrarLibroDeLista(libro: any) {
    this.cartListaLibros.map((a: any, index: any) => {
      if (libro.isbn === a.isbn) {
        this.cartListaLibros.splice(index, 1);
      }
    })
    localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
  }

  eliminarTodo() {
    this.cartListaLibros = []
    this.listaLibros.next(this.cartListaLibros);
    localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
  }

  verificarSiExiste(libro: any) {

    let esIgual = false;
    let libroEncontrado: any;

    this.cartListaLibros.map((a: any) => {
      if (a.isbn === libro.isbn) {
        libroEncontrado = a;
        esIgual = true;
      }
    })


    if (esIgual) {
      let index = this.cartListaLibros.indexOf(libroEncontrado);
      if (libroEncontrado.cantidad === 10) {
        alert("Máxima cantidad de este libro alcanzada!")
      } else {
        this.cartListaLibros[index].cantidad += 1;
      }
    } else {
      this.agregarAlCarro(libro);
    }

    this.obtenerCantidadLibros();
    localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
  }


  obtenerCantidadLibros() {
    let cantidad = 0;
    this.cartListaLibros.map((a: any) => {
      cantidad += a.cantidad;
    })  

    this.cuentaLibros.next(cantidad);
    localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
  }

  realizarPago() {
    alert(`Se ha realizado la compra por: $${this.obtenerPrecioTotal()}` )
    this.eliminarTodo();
    this.obtenerCantidadLibros();
    localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
  }

  revisarLocalStorage() {
    if (!localStorage['carrito']) {
      localStorage.setItem('carrito', JSON.stringify(this.cartListaLibros));
    } else {
      this.cartListaLibros = JSON.parse(localStorage['carrito']);
      this.listaLibros.next(this.cartListaLibros);
      this.obtenerCantidadLibros();
    }
  }
}
