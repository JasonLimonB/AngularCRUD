import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SimpsonServiceService {

  constructor(private http: HttpClient) { }

  getData(): any{
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes?count=40');
  }

}
