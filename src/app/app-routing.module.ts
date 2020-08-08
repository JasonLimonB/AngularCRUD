import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConsumoApiComponent } from './components/consumo-api/consumo-api.component';
import { CrudComponent } from './components/crud/crud.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'consumo-api', component: ConsumoApiComponent },
  { path: 'ejemplo-crud', component: CrudComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
