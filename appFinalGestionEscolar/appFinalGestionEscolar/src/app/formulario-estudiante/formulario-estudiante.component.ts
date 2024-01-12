import { Component } from '@angular/core';
import { Estudiante } from '../modelos/estudiante';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ComunicacionServices } from '../comunicacion.service';

@Component({
  selector: 'app-formulario-estudiante',
  templateUrl: './formulario-estudiante.component.html',
  styleUrls: ['./formulario-estudiante.component.css']
})
export class FormularioEstudianteComponent {
  
  mostrarModificar: boolean;
  estudiante: Estudiante;

  constructor(private http: HttpClient,
              private router: Router,
              private comunicacion: ComunicacionServices
  ) {}

  ngOnInit(){
    this.mostrarModificar = false;
    if (this.comunicacion.estudianteNuevo == true) {
      this.estudiante = {
        nombre: {
          primerNombre: '',
          primerApellido: ''
        },
        email: '',
        fechaNacimiento: new Date()
      } as Estudiante;
    } else{
      this.estudiante = this.comunicacion.estudiante;
      this.mostrarModificar = true;
    }
    console.log(this.mostrarModificar);
    
  }

  cancelar(){
    this.router.navigate(['estudiantes'])
  }

  agregarEstudiante(){
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    };
    this.http.post("/api/v1/estudiantes", this.estudiante, httpOptions).subscribe(
      (data)=>{
        this.estudiante.nombre.primerNombre = '';
        this.estudiante.nombre.primerApellido = '';
        this.estudiante.email = '';
        this.cancelar();
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  modificarEstudiante(){
    var estudianteId = this.comunicacion.estudianteId;
    let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest',
        'Authorization': 'Basic ' + btoa(up)
      })
    };
    this.http.put("/api/v1/estudiantes/" + estudianteId, this.comunicacion.estudiante, httpOptions).subscribe(
      (data)=>{
        this.mostrarModificar = !this.mostrarModificar
        console.log(data);
        this.cancelar();
        
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

}
