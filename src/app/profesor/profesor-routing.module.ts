import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ProfesorComponent } from "./profesor.component";
import { CrearexamenComponent } from "./crearexamen/crearexamen.component";


const routes: Routes = [
    { 
        path: "", 
        component: ProfesorComponent,
        children: [
            { path: "", component: CrearexamenComponent },
            { path: "crearexamen", component: CrearexamenComponent },
        ]
    },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ProfesorRoutingModule { }
