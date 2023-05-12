// registrar.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  private url = 'https://ejemplo.com/api/usuario'; // URL del endpoint para registrar usuario

  constructor(private http: HttpClient) { }

  registrarUsuario(datos: any) {
    return this.http.post(this.url, datos);
  }
}
