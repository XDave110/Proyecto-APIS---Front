import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = "https://formspree.io/f/xrgjoarw";
  constructor(private http: HttpClient) { }

  PostMessage(input: any) {
    return this.http.post(this.api, input, { responseType: 'text'}).pipe(
      map(
        (response: any) => {
          if (response) {
            return response;
          }
        }, 
        (error: any) => {
          return error;
        }
      )
    )
  }
}
