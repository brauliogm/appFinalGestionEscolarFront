import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  agregando = false;

  notas: any;

  ngOnInit(){
    this.notas = [];
    this.notas.push({"titulo": "Ejemplo", "contenido": "Esta es una nota"})
  }

  cambioPantalla(){
    this.agregando = !this.agregando;
  }

  agregar(titulo: string, contenido: string){
    this.notas.push({titulo, contenido});
    this.agregando = !this.agregando;
  }
}
