import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpsonServiceService {

  constructor(private http: HttpClient) { }

  getdataPokemon(): any{
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=40');
  }

}
