import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AltaClienteComponent } from './alta-cliente/alta-cliente.component';
import { FormsModule } from '@angular/forms';
import { ClientesService } from './clientes.service';
import { ClientesComponent } from './clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    AltaClienteComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ClientesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
