import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../service/cart.service';
import { TokenStorageService } from '../service/token-storage.service';
import { Libro } from './libro.model';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Input() libro: Libro;
  isVisible = false;
  isLoggedIn = false;

  constructor(private cartService: CartService, private tokenService: TokenStorageService) { 
  }

  ngOnInit(): void {
    if (this.tokenService.obtenerToken()) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  agregarAlCarro(libro: any) {
    this.cartService.verificarSiExiste(libro);
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


}
