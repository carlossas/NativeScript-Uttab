import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RegistroRoutingModule } from "./registro-routing.module";
import { RegistroComponent } from "./registro.component";
//SERVICIOS
import { UsuarioService } from '../shared/usuario/usuario.service';
import { CarrerasService } from "~/app/shared/carreras/carreras.service";
//MODULOS EXTERNOS
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptUIDataFormModule } from "nativescript-ui-dataform/angular";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        RegistroRoutingModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptHttpClientModule,
        NativeScriptUIDataFormModule
    ],
    providers: [
        UsuarioService,
        CarrerasService
    ],
    declarations: [
        RegistroComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class RegistroModule { }
