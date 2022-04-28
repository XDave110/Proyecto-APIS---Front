import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { 
    console.log("Checando si el email es valido");
  }

  esDesechable(email: string) {
    let endpoint = "https://open.kickbox.com/v1/disposable/";
    let url = endpoint + encodeURIComponent(email);

    let header = new HttpHeaders().set('Content-Type', 'application/json');
    
    return this.http.get(url, {headers: header})
  }
}
