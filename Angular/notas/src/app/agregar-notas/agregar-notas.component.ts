import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent {
  notas: any;
  
  

  constructor(private router: Router) {  
    console.log(this.notas);
    this.notas = this.router.getCurrentNavigation()?.extras.state;
    //this.notas = [];
    console.log(this.notas);
  }
  
  
  ngOnInit(){
    console.log(this.notas);
    if (this.notas == undefined) {
      this.notas = [];
    }
    console.log(this.notas);
  }

  agregar(){
    this.router.navigate(['/lista'], {state: this.notas})
  }

  agregarNota(titulo: string, contenido: string){
    console.log(this.notas);
    this.notas.push({titulo, contenido});
    this.agregar();
  }
}
