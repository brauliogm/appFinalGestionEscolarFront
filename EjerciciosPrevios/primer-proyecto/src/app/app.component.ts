import { Component } from '@angular/core';
import { Animal } from './Animal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primer-proyecto';

  elefante: Animal = new Animal("Pablo");
  
  
  ngOnInit(){
    this.elefante.asignarTamanio(9);
    console.log(this.elefante.Tamanio);
    
  }
}
