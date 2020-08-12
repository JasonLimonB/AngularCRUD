import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { INuevoUsuario } from '../../interfaces/inuevoUsuario';

@Injectable()
export class ServiceSpringService {

  constructor(
    private http: HttpClient
  ) { }

  private nuevoUser = 'http://localhost:8080/nuevoUsuario';
  

  getListUsuarios() :any{
    return this.http.get('/usuarios');
  }

  crearUsuarioNuevo( usuario: INuevoUsuario ){
    return this.http.post(this.nuevoUser, usuario);
  }

  eliminarUsuario(id: any){
    return this.http.get(`http://localhost:8080/eliminarUsuario/${id}`);
  }

  buscarUsuario( id: string ){
    return this.http.get('http://localhost:8080/usuarios/'+id);
  }

}
