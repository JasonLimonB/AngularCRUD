import { Component, OnInit } from '@angular/core';
import { ServiceSpringService } from 'src/app/services/crud/service-spring.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  providers: [ ServiceSpringService ] 
})
export class EditarUsuarioComponent implements OnInit {

  formaUpdate:FormGroup;

  constructor(
    private _crud: ServiceSpringService,
    private activatedR: ActivatedRoute,
    private _formB: FormBuilder
  ) { }

  ngOnInit(): void {

    this.crearForm();

    let id:any;

    this.activatedR.params.subscribe( param => id = param.id);
    this.searchUser(id)
    this.crearForm();
    

  }

  searchUser( id: any){
    this._crud.buscarUsuario(id)
      .subscribe(data => {
        this.setearData( data );
      });
  }

  crearForm(){
    this.formaUpdate = this._formB.group({
      id:['', Validators.required],
      nombre:['', [Validators.required, Validators.minLength(4)]],
      apellido: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-z]+[.][a-z]{2,3}')]]
    });
  }

  setearData(datosUsuarios: any){
    this.formaUpdate.setValue({
      id: datosUsuarios.id,
      nombre: datosUsuarios.nombre,
      apellido: datosUsuarios.apellido,
      email: datosUsuarios.email
    });
  }

  get nombreNoValido(){
    return this.formaUpdate.get('nombre').invalid && this.formaUpdate.get('nombre').touched;
  }
  get apellidoNoValido(){
    return this.formaUpdate.get('apellido').invalid && this.formaUpdate.get('apellido').touched;
  }
  get correoNoValido(){
    return this.formaUpdate.get('email').invalid && this.formaUpdate.get('email').touched;
  }

  guardar(){
    if( this.formaUpdate.invalid ){
      return Object.values( this.formaUpdate.controls ).forEach( control =>{
        control.markAllAsTouched();
      });
    }else {
      this._crud.crearUsuarioNuevo(this.formaUpdate.value)
        .subscribe( (data:any) => {
          this.formaUpdate.reset();
          if(data.id > 0){
            Swal.fire(
              'Editado',
              'Ha sido editado con exito',
              'success'
            );
          }
        });
      
    }
  }

}
