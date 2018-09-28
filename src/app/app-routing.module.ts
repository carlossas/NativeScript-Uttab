import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    //MODULOS DE REGISTRO, INICIO Y BIENVENIDA
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "registro", loadChildren: "~/app/registro/registro.module#RegistroModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    //MODULO DE ALUMNOS
    { path: "usuario", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    { path: "examen", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    { path: "listaexamen", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    //MODULO DE PROFESORES
    { path: "profesor", loadChildren: "~/app/profesor/profesor.module#ProfesorModule" },
    { path: "crearexamen", loadChildren: "~/app/profesor/profesor.module#ProfesorModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
