import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http:HttpClient) { }


  conectarAPI() {
  
    let endpoint = "https://kitsu.io/api/edge/trending/manga";
    let header: HttpHeaders = new HttpHeaders({
      Accept: "application/json",
      "Content-Type": "application/json; charset='utf-8'",
     'Access-Control-Allow-Origin': '*'
  });
    
    return this.http.get(endpoint, {headers: header})
  }
}
