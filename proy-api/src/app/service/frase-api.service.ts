import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FraseApiService {

  constructor(private http: HttpClient) { }

  conectarAPI() {
    let endpoint = "https://api.api-ninjas.com/v1/facts?limit=1";
    let header = new HttpHeaders().set('X-Api-Key', environment.frasekey);

  return this.http.get(endpoint, {headers: header});
  }
}
