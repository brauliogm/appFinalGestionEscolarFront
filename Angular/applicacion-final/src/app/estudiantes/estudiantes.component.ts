import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../modelos/estudiante';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  agregar: boolean;
  estudiantes: any;
  estudiante: Estudiante;

  constructor(private http: HttpClient,
              private router: Router
    ) {
    
  }

  ngOnInit(){
    this.estudiante = {} as Estudiante;
    this.agregar = false;
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    }
    this.http.get("/api/v1/estudiantes", httpOptions).subscribe(
      (data)=>{
        this.estudiantes = data;
        console.log(data);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  agregarEstudiante(){
    this.agregar = true;

  }

  cancelar(){
    this.agregar = !this.agregar;
  }
}
