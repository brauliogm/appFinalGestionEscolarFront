import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Estudiante } from '../modelos/estudiante';
import { ComunicacionServices } from '../comunicacion.service';

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
              private router: Router,
              private comunicacion: ComunicacionServices
    ) {}

  ngOnInit(){
    this.estudiante = {
      nombre: {
        primerNombre: '',
        primerApellido: ''
      },
      email: '',
      fechaNacimiento: new Date()
    } as Estudiante;
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
        this.ordenarPorId();
        console.log(data);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    )
  }

  

  agregarEstudiante(){
    this.comunicacion.estudianteNuevo = true;
    this.router.navigate(['estudiante/agregarEstudiante']);
  }

  eliminarEstudiante(estudianteId: number){
    const respuesta = window.prompt('¿Estás seguro? (responde si o no)');
    const respuestaFormateada = respuesta?.toLowerCase().trim();

    if (respuestaFormateada === 'si') {
      console.log(true); // o haz lo que quieras con el booleano true
      let up = localStorage.getItem("username") + ":" + localStorage.getItem("password");
      const httpOptions = {
        headers: new HttpHeaders({
          'X-Requested-With': 'XMLHttpRequest',
          'Authorization': 'Basic ' + btoa(up)
        })
      };
      this.http.delete(`/api/v1/estudiantes/${estudianteId}`, httpOptions).subscribe(
        (data)=>{
          this.ngOnInit();
        },
        (error) => {
          console.error('Error en la solicitud:', error);
        }
      )
    } else {
      console.log(false); // o haz lo que quieras con el booleano false
      alert("El estudiante no se elimino")
    }


  }

  modificarEstudiante(estudianteId: number, estudiante: Estudiante){
    console.log(estudiante);
    console.log(estudianteId);
    
    this.comunicacion.estudiante = estudiante;
    this.comunicacion.estudianteId = estudianteId;
    this.comunicacion.estudianteNuevo = false;
    this.router.navigate(['estudiante/agregarEstudiante']);
  }

  ordenarPorId() {
    this.estudiantes.sort((a: any, b: any) => a.id - b.id);
  }
}
