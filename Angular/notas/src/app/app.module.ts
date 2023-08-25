import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { AgregarNotasComponent } from './agregar-notas/agregar-notas.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    AgregarNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
