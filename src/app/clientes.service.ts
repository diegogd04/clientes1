import { Injectable, ViewChild } from '@angular/core';
import { Cliente, Grupo } from './cliente.model'
import { Observable, of } from 'rxjs';
import { NgForm } from '@angular/forms';
import { CLIENTES } from './clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientes: Cliente[] = []
  grupos: Grupo[] = []

  @ViewChild('miFormulario') miFormulario!: NgForm

  constructor() { }

  getClientes(): Observable<Cliente[]> {
    const clientes = of(CLIENTES)
    return clientes
  }

  getGrupos(): Grupo[] {
    return this.grupos
  }

  agregarCliente(cliente: Cliente) {
    this.clientes.push(cliente)
  }

  nuevoCliente() {
    this.miFormulario.resetForm()
  }
}
