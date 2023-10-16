import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent {
  notas: any;

  constructor(private router: Router) {  
    console.log(this.notas);
    this.notas = this.router.getCurrentNavigation()?.extras?.state || [];
  }
  
  ngOnInit(){
    console.log(this.notas);
    if (this.notas == undefined) {
      this.notas = [];
    }
    console.log(this.notas);
  }

  ngOnDestroy(){
    this.notas
  }

  agregar(){
    console.log(this.notas);
    this.router.navigate(['/agregar'], {state: this.notas})
    console.log(this.notas);
  }
}
