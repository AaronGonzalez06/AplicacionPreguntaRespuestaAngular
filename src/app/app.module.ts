import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { routing, appRoutingProviders } from './app.routing';
import { OpcionesComponent } from './components/opciones/opciones.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JuegoComponent } from './components/juego/juego.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    OpcionesComponent,
    JuegoComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
