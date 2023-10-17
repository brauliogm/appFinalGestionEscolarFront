// datos-compartidos.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Nota } from './nota.model';

@Injectable({
  providedIn: 'root'
})
export class ArrayService {
    notas: Array<Nota> = [];

  constructor() { }

  agregarNota(nota: Nota) {
    this.notas.push(nota);
  }

  eliminarNota(numNota:number){
    this.notas.slice(numNota);
  }
}
