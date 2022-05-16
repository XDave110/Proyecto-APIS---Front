import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
const TOKEN_KEY = "user_token";
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private isLoggedIn = new Subject<any>();

  constructor() { }

  cerrarSesion() {
    window.sessionStorage.clear();
  }

  guardarToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  obtenerToken() {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  mandarActualizacion(message: boolean) {
    this.isLoggedIn.next({ status : message });
  }

  obtenerActualizacion() {
    return this.isLoggedIn.asObservable();
  }




}
