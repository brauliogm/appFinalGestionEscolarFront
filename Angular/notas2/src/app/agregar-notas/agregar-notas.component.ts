import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent implements OnInit{
  notas: any;
  titulo: string = '';
  contenido: string = '';

  constructor(private router: Router){
    console.log(this.notas);
    this.notas = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.notas);
  }

  ngOnInit(){
    console.log(this.notas);
    if (this.notas == undefined  || this.notas == Object) {
      this.notas = new Array
    }
    console.log(this.notas);
    
  }

  agregar(){
    this.router.navigate(['/lista'], {state: this.notas as Array<any>});
  }

  agregarNota(){
    this.notas.push({"titulo": this.titulo, "contenido": this.contenido});
    this.router.navigate(['/lista'], {state: this.notas as Array<any>});
  }
}
