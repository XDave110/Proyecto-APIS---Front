export class Libro {
    
    constructor(public isbn: string, 
        public nombre: string, 
        public autor: string, 
        public descripcion: string, 
        public precio: number, 
        public portada: string,
        public generos: string[]) {
    }
}