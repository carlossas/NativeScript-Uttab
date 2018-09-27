import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { UsuarioComponent } from "./usuario.component";

const routes: Routes = [
    { path: "", component: UsuarioComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class UsuarioRoutingModule { }
