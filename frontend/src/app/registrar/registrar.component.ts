// registrar.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {

  nombre: string;
  correo: string;
  contrasena: string;

  constructor() {
    this.nombre = '';
    this.correo = '';
    this.contrasena = '';
  }

  registrar() {
    console.log(`Usuario ${this.nombre} registrado con éxito.`);
  }

}
