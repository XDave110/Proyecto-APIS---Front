import { Component, OnInit } from '@angular/core';
import { ApibooksService } from '../service/apibooks.service';
import { MangaService } from '../service/manga.service';
import { Libro } from './../libro/libro.model';


@Component({
  selector: 'app-lista-libro',
  templateUrl: './lista-libro.component.html',
  styleUrls: ['./lista-libro.component.css']
})

export class ListaLibroComponent implements OnInit {
  public pagina: number = 1;
  filteredString: string = '';

  libros: Libro[] = [];

  constructor(private mangaService: MangaService, private bookService: ApibooksService) {
    this.conectarAPI();
   }

   conectarAPI() {
      this.bookService.conectarAPI().subscribe((res: any) => {
        for (let book of res.data) {
          let newBook = new Libro(book.isbn, book.title, book.author, book.description, book.price, book.image);
          this.libros.push(newBook);
        }
      })
   }


   

  ngOnInit(): void {
  }

}
