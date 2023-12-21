import { Component } from '@angular/core';
import { ClientesService } from '../clientes.service';
import { Cliente } from '../cliente.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(public clientesService: ClientesService) { }

  clientes: Cliente[] = []

  getClientes(): void {
    this.clientesService.getClientes()
      .subscribe(clientes => this.clientes = clientes)
  }

  ngOnInit(): void {
    this.clientesService.getClientes().subscribe(
      (data) => {
        this.clientes = data
      },
      (error) => {
        console.error('Error al obtener clientes:', error)
      }
    )
  }
}
