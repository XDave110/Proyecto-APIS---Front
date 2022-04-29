import { Component, OnInit } from '@angular/core';
import { Libro } from './../libro/libro.model';

@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})

export class ListaLibroComponent implements OnInit {
  public pagina: number;
  filteredString: string = '';

  libros: Libro[];

  constructor() {
    this.libros = [
      new Libro("9786073132411", "El mundo de hielo y fuego", "George R. R. Martin", "La historia nunca antes vista de Poniente y de las otras tierras del universo de Juego de tronos con cientos de páginas de nuevos contenidos.Si el pasado es prólogo la obra maestra de George R.R. Martin -Juego de Tronos la saga fantástica más innovadora y trepidante de nuestra época-se merecía una introducción excepcional. Por fin con el mundo de hielo y fuego la tenemos. Con más de 170 imágenes originales a todo color. Este libro magníficamente ilustrado es una historia completa de los Siete Reinos animada por vibrantes descripciones de las épicas batallas enconadas rivalidades y audaces rebeliones que desembocan en la trama de Canción de hielo y fuego y de la serie de HBO Game of thrones. En una colaboración preparada desde hace años George R.R. Martin ha formado equipo con Elio M. García Jr. Y Linda Antonsson fundadores del prestigioso fan site Westeros quizá las únicas personas que conocen casi tan bien el mundo de la saga como su visionario creador. Se reúne aquí todo el saber acumulado todas las teorías eruditas y todo el acervo de relatos populares de maestres septones magos y bardos en una crónica que empieza por la Era del Amanecer y sigue por la Edad de los Héroes la aparición de los primeros hombres la llegada de Aegon el Conquistador el establecimiento del Trono de Hierro por Aegon la Rebelión de Robert y la caída del Rey Loco Aerys II Targaryen causantes de las peripecias actuales de los Stark los Lannister los Baratheon y los Targaryen. Complemento definitivo del universo que tan deslumbrantemente ha ideado George R.R. Martin el mundo de hielo y fuego es sin duda la demostración de que es más poderosa la pluma que una tormenta de espadas.", 479.00, "https://images-na.ssl-images-amazon.com/images/I/91wmOb0+tbL.jpg", ["accion", "terror", "aventura"]), 
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
