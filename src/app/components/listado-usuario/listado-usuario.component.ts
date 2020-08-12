import { Component, OnInit } from '@angular/core';
import { ServiceSpringService } from '../../services/crud/service-spring.service';

import Swal from 'sweetalert2';

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


  eliminarUsuario(id:string ){
    Swal.fire({
      title: '¿Seguro que quieres eliminarlo?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#132a4a',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar'
    }).then((result) => {
      console.log(result.value);
      if (result.value) {
        
        this._crud.eliminarUsuario( id )
          .subscribe( (data: any) =>{
            if( data === null ) {
              Swal.fire(
                'Eliminado',
                'Ha sido eliminado con exito',
                'success'
              )
            }else if( data.status === 500 ){
              Swal.fire(
                'Oops!',
                'Algo ocurrio mal',
                'error'
              )
            }
          });
        
        /*
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        */
      }
    });
  }

}
