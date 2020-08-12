import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServiceSpringService } from '../../services/crud/service-spring.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
  providers: [ ServiceSpringService ]
})
export class NuevoUsuarioComponent implements OnInit {

  nuevoUsuario: FormGroup;

  constructor(
    private _formBld: FormBuilder,
    private _UsuarioS: ServiceSpringService
  ) {
    this.crearFormulario();
   }

  ngOnInit(): void {
  }

  get nombreNoValido(){
    return this.nuevoUsuario.get('nombre').invalid && this.nuevoUsuario.get('nombre').touched;
  }
  get apellidoNoValido(){
    return this.nuevoUsuario.get('apellido').invalid && this.nuevoUsuario.get('apellido').touched;
  }
  get correoNoValido(){
    return this.nuevoUsuario.get('email').invalid && this.nuevoUsuario.get('email').touched;
  }


  crearFormulario(){

    this.nuevoUsuario = this._formBld.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellido: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z]+[.][a-z]{2,3}')]]
    });

  }

  enviar(){
    
    if( this.nuevoUsuario.invalid ){
      return Object.values( this.nuevoUsuario.controls ).forEach( control =>{
        control.markAllAsTouched();
      });
    }else {
      this._UsuarioS.crearUsuarioNuevo(this.nuevoUsuario.value)
        .subscribe( (data:any) => {
          this.nuevoUsuario.reset();
          if(data.id > 0){
            Swal.fire(
              'Registrado',
              'Ha sido registrado con exito',
              'success'
            );
          }
        });
      
    }


  }

}
