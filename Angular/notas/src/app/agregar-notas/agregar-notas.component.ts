import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent {
  notas: any;

  constructor(private router: Router){  }
  
  ngOnInit(){
    this.notas = [];
    this.notas.push({"titulo": "Ejemplo", "contenido": "Esta es una nota"})
  }

  agregar(){
    this.router.navigate(['/lista'])
  }

  agregarNota(titulo: string, contenido: string){
    this.notas.push({titulo, contenido});
  }
}
