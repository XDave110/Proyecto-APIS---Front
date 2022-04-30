import { Component, OnInit } from '@angular/core';
import { Manga } from '../manga/manga.model';
import { MangaService } from '../service/manga.service';

@Component({
  selector: 'app-lista-mangas',
  templateUrl: './lista-mangas.component.html',
  styleUrls: ['./lista-mangas.component.css']
})
export class ListaMangasComponent implements OnInit {
  mangas: Manga[] = [];
  constructor(private mangaService: MangaService) { 
    this.conectarAPI();
  }

  ngOnInit(): void {
  }

  conectarAPI() {
    this.mangaService.conectarAPI().subscribe((res:any) => {
      // console.log(res.data)
      let titulo = '';

      for (let manga of res.data) {
        //Titulo
        if (manga.attributes.titles.en) {
          titulo = manga.attributes.titles.en;    
        } else if (manga.attributes.titles.en_jp){
          titulo = manga.attributes.titles.en_jp;
        } else {
          titulo = manga.attributes.titles.en_us;
        }
        //console.log(titulo);
        
        //Descripcion
        let descripcion = manga.attributes.description;
        // console.log(descripcion)
        
        //Poster
        let poster = manga.attributes.posterImage.medium;
        // console.log(poster);

        //status
        let status = manga.attributes.status;
        console.log(status); 
        
        this.mangas.push(new Manga(titulo, descripcion, poster, status));

        // console.log(manga);
      }
    }) 
  
  }

}
