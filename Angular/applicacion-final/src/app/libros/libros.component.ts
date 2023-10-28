import { Component } from '@angular/core';
import { Libro } from '../modelos/libro';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros: any;
  agregando: any;
  libro!: Libro;

  constructor(private router:Router, private http:HttpClient){

  }

  ngOnInit(){
    this.libro = {} as Libro;
    this.agregando = false;
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    }
    this.http.get("/api/v1/libros", httpOptions).subscribe(
      (data)=>{
        this.libros = data;
        console.log(data);
        
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  agregar(){
    this.agregando = !this.agregando;
  }

  agregarLibro(){
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    };
    this.http.post("/api/v1/libros", this.libro, httpOptions).subscribe(
      (data)=>{
        this.libro.autor = '';
        this.libro.titulo = '';
        this.agregar();
        this.ngOnInit();
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }
}
