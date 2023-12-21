import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent {
  cliente: Cliente = {
    id: 0,
    nombre: '',
    cif: '',
    direccion: '',
    grupo: 0
  }

  clientes = this.clientesService.clientes

  grupos = [
    { id: 0, nombre: 'Sin definir' },
    { id: 1, nombre: 'Activos' },
    { id: 2, nombre: 'Inactivos' },
    { id: 3, nombre: 'Deudores' }
  ]

  opcionSeleccionada: any

  constructor(public clientesService: ClientesService) {
    this.opcionSeleccionada = this.grupos[0]
  }

  agregarCliente() {
    this.clientesService.agregarCliente(this.cliente)
    this.nuevoCliente()
  }

  nuevoCliente() {
    this.clientesService.nuevoCliente()
  }

  getClientes() {
    this.clientesService.getClientes()
  }
}
