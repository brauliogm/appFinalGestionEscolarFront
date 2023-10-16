import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit{
  notas: any;

  constructor(private router: Router){
    console.log(this.notas);
    this.notas = this.router.getCurrentNavigation()?.extras.state;
    console.log(this.notas);
  }

  ngOnInit(){
    if (this.notas == undefined || this.notas == Object) {
      this.notas = new Array
    }
    console.log(this.notas);
    
  }

  agregar(){
    this.router.navigate(['/agregar'], {state: this.notas as Array<any>});
  }
}
 