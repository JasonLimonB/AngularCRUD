import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SecurityDomPipe } from './pipes/domSeguro/security-dom.pipe';
import { ConsumoApiComponent } from './components/consumo-api/consumo-api.component';
import { CrudComponent } from './components/crud/crud.component';

import { HttpClientModule } from '@angular/common/http';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ListadoUsuarioComponent } from './components/listado-usuario/listado-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    SecurityDomPipe,
    ConsumoApiComponent,
    CrudComponent,
    NuevoUsuarioComponent,
    ListadoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
