import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { MateriasComponent } from './materias/materias.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { LibrosComponent } from './libros/libros.component';
import { FormularioEstudianteComponent } from './formulario-estudiante/formulario-estudiante.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'libros', component: LibrosComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'materias', component: MateriasComponent },
  { path: 'estudiante/agregarEstudiante', component: FormularioEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
