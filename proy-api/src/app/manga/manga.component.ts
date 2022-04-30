import { Component, OnInit, Input  } from '@angular/core';
import { Manga } from './manga.model';


@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {
  @Input() manga: Manga;
  isVisible = false;
  
  constructor() {
    
   }



  ngOnInit(): void {

  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  

}
