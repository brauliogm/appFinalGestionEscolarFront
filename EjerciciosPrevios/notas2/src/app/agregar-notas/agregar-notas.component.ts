import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayService } from '../array.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agregar-notas',
  templateUrl: './agregar-notas.component.html',
  styleUrls: ['./agregar-notas.component.css']
})
export class AgregarNotasComponent implements OnInit{
  titulo: string;
  contenido: string;

  constructor(private router: Router,
              private arrayService: ArrayService,
              private http: HttpClient){
  }

  ngOnInit(){
  }

  agregarNota(){
    const nota = {"titulo": this.titulo, "contenido": this.contenido};
    this.http.post("/notas", nota).subscribe(
      (data) => {
        this.router.navigate(['/']);
      }
    )
  }

  cancelar(){
    this.router.navigate(['/']);
  }

}
