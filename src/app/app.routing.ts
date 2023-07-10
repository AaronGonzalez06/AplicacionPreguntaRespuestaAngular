import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { InicioComponent } from "./components/inicio/inicio.component";
import { OpcionesComponent } from "./components/opciones/opciones.component";
import { JuegoComponent } from "./components/juego/juego.component";

const appRoutes: Routes = [
    {path: '', component: OpcionesComponent},
    {path: 'Inicio', component: OpcionesComponent},
    {path: 'Opciones', component: OpcionesComponent},
    {path: 'Juego', component: JuegoComponent},
    {path: '**', component: OpcionesComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);