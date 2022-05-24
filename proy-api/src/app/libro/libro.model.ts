export class Libro {
    
    public cantidad: number = 1;

    constructor(public isbn: string, 
        public nombre: string, 
        public autor: string, 
        public descripcion: string, 
        public precio: number, 
        public portada: string) {
    }
}