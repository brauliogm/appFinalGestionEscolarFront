export class Animal{
    Nombre!: string;
    Tamanio?: number;
    Macho?: boolean;

    constructor(Nombre: string){
        this.Nombre = Nombre;
        console.log("El nombre del animal es: " + Nombre);
        
    }

    asignarTamanio(tamanio: number){
        this.Tamanio = tamanio;
    }
}