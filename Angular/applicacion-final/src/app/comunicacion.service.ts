import { Injectable } from "@angular/core";
import { Estudiante } from "./modelos/estudiante";

@Injectable()
export class ComunicacionServices{
    estudiante: Estudiante;
    estudianteId: number;
    estudianteNuevo: boolean;

    constructor(){}

}