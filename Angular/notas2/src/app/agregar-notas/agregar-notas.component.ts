import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayService } from '../array.service';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent implements OnInit{
  titulo: string;
  contenido: string;

  constructor(private router: Router,
              private arrayService: ArrayService){
  }

  ngOnInit(){
  }

  agregarNota(){
    this.arrayService.agregarNota({"titulo": this.titulo, "contenido": this.contenido});
    this.router.navigate(['/']);
  }

  cancelar(){
    this.router.navigate(['/']);
  }

}
