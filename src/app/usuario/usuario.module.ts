import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { UsuarioRoutingModule } from "./usuario-routing.module";
import { UsuarioComponent } from "./usuario.component";
//SERVICIOS
import { UsuarioService } from '../shared/usuario/usuario.service';
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
    ],
    declarations: [
        UsuarioComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UsuarioModule { }
