import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { UsuarioComponent } from "./usuario.component";
import { ExamenComponent } from "./examen/examen.component";
import { ListaExamenComponent } from "./listaExamen/listaExamen.component";


const routes: Routes = [
    { 
        path: "", 
        component: UsuarioComponent,
        children: [
            { path: "", component: ListaExamenComponent },
            { path: 'examen/:id', component: ExamenComponent},
            { path: 'listaexamen', component: ListaExamenComponent},
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UsuarioRoutingModule { }
