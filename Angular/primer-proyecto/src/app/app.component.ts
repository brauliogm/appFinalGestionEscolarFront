import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto';

  elefante: Animal = {Nombre: "Elefante", Tamanio: 8, Macho: true}
  
  
  ngOnInit(){
    console.log(this.elefante.Nombre);
    
  }
}
