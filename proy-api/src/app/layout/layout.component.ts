import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../service/cart.service';
import { TokenStorageService } from '../service/token-storage.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  private suscripcion: Subscription;
  number: number = 0;
  libros: [];
  isLoggedIn: boolean = false;

  constructor(public router: Router, private cartService: CartService, private tokenService: TokenStorageService) { 
    this.suscripcion = this.tokenService.obtenerActualizacion().subscribe(message => {
      this.isLoggedIn = message;
    })
  
  }

  ngOnInit(): void {

    if (this.tokenService.obtenerToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }

    this.cartService.cuenta.subscribe( cuenta => {
      this.number = cuenta;
    })
  }

  cerrarSesion() {
    this.tokenService.cerrarSesion();
    this.isLoggedIn = false;
    // this.actualizarPagina();
    this.router.navigate(['/login']);
  }

  actualizarPagina() {
    window.location.reload();
  }

  ngOnDestroy() {
    this.suscripcion.unsubscribe();
  }

}
