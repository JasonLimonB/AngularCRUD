import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServiceSpringService {

  constructor(
    private http: HttpClient
  ) { }

  getListUsuarios() :any{
    return this.http.get('/usuarios');
  }

}
