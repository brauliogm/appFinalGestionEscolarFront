import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaNotasComponent } from './lista-notas/lista-notas.component';
import { AgregarNotasComponent } from './agregar-notas/agregar-notas.component';
import { ArrayService } from './array.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaNotasComponent,
    AgregarNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ ArrayService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
