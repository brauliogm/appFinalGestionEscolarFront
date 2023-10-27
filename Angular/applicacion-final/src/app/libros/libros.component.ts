import { Component } from '@angular/core';
import { Libro } from '../modelos/libro';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros: any;
  agregando: any;
  libro: Libro;

  constructor(private router:Router, private http:HttpClient){

  }

  ngOnInit(){
    this.libro = {} as Libro;
    this.agregando = false;
  }

  agregar(){
    this.agregando = !this.agregando;
  }

}
