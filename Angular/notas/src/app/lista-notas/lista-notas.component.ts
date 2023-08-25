import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent {
  notas: any;

  constructor(private router: Router){
    
  }

  ngOnInit(){
    this.notas = [];
    this.notas.push({"titulo": "Ejemplo", "contenido": "Esta es una nota"})
  }

  agregar(){
    this.router.navigate(['/agregar'])
  }
}
