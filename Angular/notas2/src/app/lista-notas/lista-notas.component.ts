import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayService } from '../array.service';
import { Nota } from '../nota.model';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit{
  notas: Array<Nota> = this.arrayService.notas;

  constructor(private router: Router,
              private arrayService: ArrayService){
  }
  

  ngOnInit(){
  }

  agregar(){
    this.router.navigate(['/agregar'], {state: this.notas as Array<any>});
  }
}
 