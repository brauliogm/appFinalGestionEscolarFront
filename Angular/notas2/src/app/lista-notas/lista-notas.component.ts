import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayService } from '../array.service';
import { Nota } from '../nota.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lista-notas',
  templateUrl: './lista-notas.component.html',
  styleUrls: ['./lista-notas.component.css']
})
export class ListaNotasComponent implements OnInit{
  notas: any;
  index: number;

  constructor(private router: Router,
              private arrayService: ArrayService,
              private http: HttpClient){
  }
  

  ngOnInit(){
    this.http.get("/notas").subscribe(
      (data)=>{
        this.notas = data;
      }
    )
  }

  agregar(){
    this.router.navigate(['/agregar']);
  }

  eliminarNota(index: number){
    this.http.delete(`/notas/${index}`).subscribe(
      (data) => {
        console.log('Eliminación exitosa', data);
        console.log(index);
        this.router.navigate(['/']);
      }
    )
  }
}
 