import { Component } from '@angular/core';

@Component({
  selector: 'app-primer-componente',
  templateUrl: './primer-componente.component.html',
  styleUrls: ['./primer-componente.component.css']
})
export class PrimerComponenteComponent {
  ejemplo = "Interpolacion";

  edad = 18;
  mayor = false;

  frutas = ["pera", "fresa", "melon"];

  evaluacion = 3;

  cursos = [
    {
      name: "HTML",
      level: "Beginner",
      color: "green"
    },
    {
      name: "CSS",
      level: "Beginner",
      color: "red"
    },
    {
      name: "JS",
      level: "Beginner",
      color: "blue"
    }
  ];
}