import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent {

  estudiantes: any;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(){
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
}
