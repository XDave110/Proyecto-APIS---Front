import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string) {
    if (value.length === 0 || filterString === '') {
      return value;
    }

    const libros = [];

    console.log(value);
    for (const libro of value) {
      if (libro.nombre === filterString 
        || libro.autor === filterString 
        || libro.isbn === filterString) {
        libros.push(libro);
      }

      for (const genero of libro.generos) {
        if (genero === filterString) {
          libros.push(libro);
        } 
      }
    }

    return libros;
  }

}
