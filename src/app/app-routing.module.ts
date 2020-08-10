import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsumoApiComponent } from './components/consumo-api/consumo-api.component';
import { CrudComponent } from './components/crud/crud.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consumo-api', component: ConsumoApiComponent },
  { path: 'ejemplo-crud', component: CrudComponent,
      children: [
        { path: 'nuevoUsuario', component: NuevoUsuarioComponent },
        { path: 'listadoUsuarios', component: ListadoUsuarioComponent },
        { path: '**', pathMatch: 'full', redirectTo: 'listadoUsuarios' }
      ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
