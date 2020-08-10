import { Component, OnInit } from '@angular/core';
import { SimpsonServiceService } from '../../services/simpson/simpson-service.service'

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.component.html',
  styleUrls: ['./consumo-api.component.css'],
  providers: [ SimpsonServiceService ]
})
export class ConsumoApiComponent implements OnInit {

  public pokemonData = [];

  constructor(
    private _servicePokemon: SimpsonServiceService
  ) { }

  ngOnInit(): void {

    this._servicePokemon.getData()
      .subscribe((data : any) => {
        this.pokemonData = data;
      });
      
  }

}
