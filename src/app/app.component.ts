import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyectoClientes1';
  grupos = [
    { id: 0, nombre: 'Sin definir' },
    { id: 1, nombre: 'Activos' },
    { id: 2, nombre: 'Inactivos' },
    { id: 3, nombre: 'Deudores' }
  ]
}
