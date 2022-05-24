import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  registrarUsuario(userName: string, email: string, password: string) {
    let endpoint = "http://localhost:3000/api/users/signup";
    
    let header: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json"
    });

    let body = {
      "userName": userName,
      "email": email,
      "password": password 
    }  

    return this.http.post<any>(endpoint, body, {headers: header});
  }

  iniciarSesion(email: string, password: string) {
    let endpoint = "http://localhost:3000/api/users/login";
    
    let header: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json"
    });

    let body = {
      "email": email,
      "password": password
    }  

    return this.http.post<any>(endpoint, body, {headers: header});
  }
}
