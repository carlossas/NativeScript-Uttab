import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
//RUTAS
import { ProfesorRoutingModule } from "./profesor-routing.module";
//COMPONENTES
import { ProfesorComponent } from "./profesor.component";
import { CrearexamenComponent } from "./crearexamen/crearexamen.component";

//SERVICIOS
import { UsuarioService } from '../shared/usuario/usuario.service';
//MODULOS EXTERNOS
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { CarrerasService } from "../shared/carreras/carreras.service";
import { ExamenesService } from "../shared/examenalumno/examen.service";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        ProfesorRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
    ],
    providers: [
        UsuarioService,
        CarrerasService,
        ExamenesService,
    ],
    declarations: [
        ProfesorComponent,
        CrearexamenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ProfesorModule { }
