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
        this.ordenarPorId();
        
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

  asignar(libroId: string){
    var estudianteId = prompt("Escribe el Id del estudiante que quieres asignar a este libro");
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    };
    this.http.put("/api/v1/estudiantes/" + estudianteId + "/libros/" + libroId, {}, httpOptions).subscribe(
      (data)=>{
        console.log(data);
        this.ngOnInit();
        
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  desasignarLibro(libro: Libro){
    const libroModificado = {
      autor: libro.autor,
      titulo: libro.titulo,
    } as Libro;
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    };
    this.http.put("/api/v1/libros/" + libro.id, libroModificado, httpOptions).subscribe(
      (data)=>{
        console.log(data);
        this.ngOnInit();
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  ordenarPorId() {
    this.libros.sort((a: any, b: any) => a.id - b.id);
  }
}
