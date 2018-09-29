import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
//RUTAS
import { UsuarioRoutingModule } from "./usuario-routing.module";
//COMPONENTES
import { UsuarioComponent } from "./usuario.component";
import { ExamenComponent } from "./examen/examen.component";
import { ListaExamenComponent } from "./listaExamen/listaExamen.component";

//SERVICIOS
import { UsuarioService } from '../shared/usuario/usuario.service';
import { ExamenesService } from '~/app/shared/examenalumno/examen.service';

//MODULOS EXTERNOS
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";



@NgModule({
    imports: [
        NativeScriptCommonModule,
        UsuarioRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
    ],
    providers: [
        UsuarioService,
        ExamenesService
        
    ],
    declarations: [
        UsuarioComponent,
        ExamenComponent,
        ListaExamenComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UsuarioModule { }
