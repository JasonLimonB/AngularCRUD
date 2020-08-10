import { Component, OnInit } from '@angular/core';
import { ServiceSpringService } from '../../services/crud/service-spring.service';

@Component({
  selector: 'app-listado-usuario',
  templateUrl: './listado-usuario.component.html',
  styleUrls: ['./listado-usuario.component.css'],
  providers: [ ServiceSpringService ]
})
export class ListadoUsuarioComponent implements OnInit {

  public usuarios:any = [];

  constructor(
    private _crud: ServiceSpringService
  ) { }

  ngOnInit(): void {

      this.llenarArrUsuarios();

  }

  private llenarArrUsuarios(){
    this._crud.getListUsuarios()
      .subscribe( (data: any) =>{
        this.usuarios = data;
      } );
  }


}
