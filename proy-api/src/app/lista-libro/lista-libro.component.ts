import { Component, OnInit } from '@angular/core';
import { Libro } from './../libro/libro.model';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})

export class ListaLibroComponent implements OnInit {
  public pagina: number;
  libros: Libro[];

  constructor() {
    this.libros = [
      new Libro("123", "Harry Potter", "Andrei", "Este es un libro blabla", 30, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []), 
      new Libro("1234", "Harry Potter 2", "Andrei", "Este es un libro xxxxxx", 31, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []), 
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", []),
      new Libro("12345", "Harry Potter 3", "Andrei", "Este es un libro zzzzz", 32, "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/harry-potter-y-la-piedra-filosofal/39102729-37-esl-ES/harry-potter-y-la-piedra-filosofal.jpg", [])
    ]
   }

  ngOnInit(): void {
  }

}
